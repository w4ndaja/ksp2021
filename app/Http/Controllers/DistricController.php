<?php

namespace App\Http\Controllers;

use App\Models\District;
use App\Models\Regency;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DistricController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $queryExists = $request->exists('query');
        $regencyIdExist = $request->exists('regency_id');
        $query = request('query');
        $regencyId = request('regency_id');
        $allRegency = Regency::all();
        $regencies = fn () => $allRegency;
        $firstRegencyId = $allRegency->first()->id;
        $districs = fn () => District::where(function ($q) use ($queryExists, $query, $regencyId, $regencyIdExist, $firstRegencyId) {
            if ($queryExists) $q->where('name', 'LIKE', '%' . $query . '%');
            $q->whereRegencyId($regencyIdExist ? $regencyId : $firstRegencyId);
        })->paginate($request->per_page ?? 10)->withQueryString();
        return Inertia::render('Parameter/District/Index', compact('districs', 'regencies'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $form = $request->validate([
            'name' => 'required|string',
            'id' => 'required|integer',
            'regency_id' => 'required|integer',
        ]);
        District::insert($form);
        return back();
    }

    public function update(Request $request, District $district)
    {
        $form = $request->validate([
            'name' => 'required|string',
            'id' => 'required|integer',
            'regency_id' => 'required|integer',
        ]);
        $district->timestamps = false;
        $district->update($form);
        return back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(District $district)
    {
        $district->delete();
        return back();
    }
}
