<?php

namespace App\Http\Controllers;

use App\Models\District;
use App\Models\OpdWorkUnit;
use App\Models\Province;
use App\Models\Regency;
use App\Models\WorkingArea;
use App\Models\WorkUnit;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OpdWorkUnitController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $queryExists = $request->exists('query');
        $query = request('query');
        $workUnits = fn () => OpdWorkUnit::with('province', 'regency', 'distric', 'workingArea')->where(fn ($q) => $queryExists ? $q->where('name', 'LIKE', '%'.$query.'%') : 1)->paginate($request->per_page ?? 10)->withQueryString();
        $workingAreas = fn () => WorkingArea::all();
        $provinces = fn () => Province::all();
        return Inertia::render('Parameter/OpdWorkUnit/Index', compact('workUnits', 'workingAreas', 'provinces'));
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
            'code' => 'required|string',
            'working_area_id' => 'required',
        ]);
        OpdWorkUnit::create($form);
        return back();
    }

    public function update(Request $request, OpdWorkUnit $opdWorkUnit)
    {
        $form = $request->validate([
            'name' => 'required|string',
            'code' => 'required|string',
            'working_area_id' => 'required',
        ]);
        $opdWorkUnit->update($form);
        return back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(OpdWorkUnit $opdWorkUnit)
    {
        $opdWorkUnit->delete();
        return back();
    }
}
