<?php

namespace App\Http\Controllers;

use App\Models\OpdWorkUnit;
use App\Models\WorkUnit;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WorkUnitController extends Controller
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
        $firstOpdWorkUnitId = $request->opd_work_unit_id ?? OpdWorkUnit::firstOrNew()->id;
        $workUnits = fn () => WorkUnit::with('opdWorkUnit:id,name')->where(function ($q) use ($queryExists, $query, $firstOpdWorkUnitId) {
            if ($queryExists) $q->where('name', 'LIKE', '%' . $query . '%');
            $q->whereOpdWorkUnitId($firstOpdWorkUnitId);
        })->paginate($request->per_page ?? 10)->withQueryString();
        $opdWorkUnits = OpdWorkUnit::select('id', 'name')->get();
        return Inertia::render('Parameter/WorkUnit/Index', compact('workUnits', 'opdWorkUnits', 'firstOpdWorkUnitId'));
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
            'opd_work_unit_id' => 'required',
        ]);
        WorkUnit::create($form);
        return back();
    }

    public function update(Request $request, WorkUnit $workUnit)
    {
        $form = $request->validate([
            'name' => 'required|string',
            'code' => 'required|string',
            'opd_work_unit_id' => 'required',
        ]);
        $workUnit->update($form);
        return back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(WorkUnit $workUnit)
    {
        $workUnit->delete();
        return back();
    }
}
