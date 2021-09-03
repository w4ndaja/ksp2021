<?php

namespace App\Http\Controllers;

use App\Models\General;
use App\Models\OpdWorkUnit;
use App\Models\WorkingArea;
use App\Models\Year;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GeneralController extends Controller
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
        $generals = fn () => General::with('opdWorkUnit', 'year')->where(fn ($q) => $queryExists ? $q->where('leader_name', 'LIKE', '%' . $query . '%') : 1)->paginate($request->per_page ?? 10)->withQueryString();
        $years = fn () => Year::all();
        $opdWorkUnits = fn () => OpdWorkUnit::all();
        return Inertia::render('Parameter/General/Index', compact('generals', 'years', 'opdWorkUnits'));
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
            'year_id' => 'required|integer',
            'opd_work_unit_id' => 'required|integer',
            'leader_name' => 'required|string',
            'leader_id' => 'required|string',
            'leader_position' => 'required|string',
            'fo_name' => 'required|string',
            'fo_id' => 'required|string',
            'fo_position' => 'required|string',
        ]);
        General::create($form);
        return back();
    }

    public function update(Request $request, General $general)
    {
        $form = $request->validate([
            'year_id' => 'required|integer',
            'opd_work_unit_id' => 'required|integer',
            'leader_name' => 'required|string',
            'leader_id' => 'required|string',
            'leader_position' => 'required|string',
            'fo_name' => 'required|string',
            'fo_id' => 'required|string',
            'fo_position' => 'required|string',
        ]);
        $general->update($form);
        return back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(General $general)
    {
        $general->delete();
        return back();
    }
}
