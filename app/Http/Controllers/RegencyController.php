<?php

namespace App\Http\Controllers;

use App\Models\Province;
use App\Models\Regency;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RegencyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $queryExists = $request->exists('query');
        $provinceIdExists = $request->exists('province_id');
        $query = request('query');
        $provinceId = request('province_id');
        $allProvinces = Province::all();
        $provinces = fn () => $allProvinces;
        $firstProvinceId = $allProvinces->first()->id;
        $regencies = fn () => Regency::where(function ($q) use ($queryExists, $query, $provinceId, $provinceIdExists, $firstProvinceId) {
            if ($queryExists) $q->where('name', 'LIKE', '%' . $query . '%');
            $q->whereProvinceId($provinceIdExists ? $provinceId : $firstProvinceId);
        })->paginate($request->per_page ?? 10)->withQueryString();
        return Inertia::render('Parameter/Regency/Index', compact('regencies', 'provinces'));
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
            'province_id' => 'required|integer',
        ]);
        Regency::insert($form);
        return back();
    }

    public function update(Request $request, Regency $province)
    {
        $form = $request->validate([
            'name' => 'required|string',
            'id' => 'required|integer',
            'province_id' => 'required|integer',
        ]);
        $province->timestamps = false;
        $province->update($form);
        return back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Regency $province)
    {
        $province->delete();
        return back();
    }
}
