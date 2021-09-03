<?php

namespace App\Http\Controllers;

use App\Models\Procurement;
use App\Models\WorkUnit;
use App\Models\Year;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProcurementController extends Controller
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
        $procurements = fn () => Procurement::with('year', 'workUnit')->where(fn ($q) => $queryExists ? $q->where('name', 'LIKE', '%' . $query . '%') : 1)->paginate($request->per_page ?? 10)->withQueryString();
        $years = fn () => Year::all();
        $workUnits = fn () => WorkUnit::all();
        return Inertia::render('Lpse/Procurement/Index', compact('procurements', 'years', 'workUnits'));
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
            'year_id' => 'required',
            'work_unit_id' => 'required',
            'activity_number' => 'required|string',
            'rup_code' => 'required|string',
            'implement_method' => 'required|string',
            'job_type' => 'required|string',
            'fund_source' => 'required|string',
            'pa_name' => 'required|string',
            'pa_nip' => 'required|string',
            'pa_position' => 'required|string',
            'provider_name' => 'required|string',
            'provider_address' => 'required|string',
            'contract_no' => 'required|string',
            'contract_date' => 'required|date',
            'job_location' => 'required|string',
            'job_magnitude' => 'required|string',
            'job_longitude' => 'required|string',
            'smpk_no' => 'required|string',
            'duration_day' => 'required|integer',
            'duration_week' => 'required|integer',
            'duration_month' => 'required|integer',
            'duration_year' => 'required|integer',
            'start_date' => 'required|date',
            'end_date' => 'required|date',
            'value' => 'required|integer',
            'description' => 'required|string',
        ]);
        Procurement::create($form);
        return back();
    }

    public function update(Request $request, Procurement $procurement)
    {
        $form = $request->validate([
            'year_id' => 'required',
            'work_unit_id' => 'required',
            'activity_number' => 'required|string',
            'rup_code' => 'required|string',
            'implement_method' => 'required|string',
            'job_type' => 'required|string',
            'fund_source' => 'required|string',
            'pa_name' => 'required|string',
            'pa_nip' => 'required|string',
            'pa_position' => 'required|string',
            'provider_name' => 'required|string',
            'provider_address' => 'required|string',
            'contract_no' => 'required|string',
            'contract_date' => 'required|date',
            'job_location' => 'required|string',
            'job_magnitude' => 'required|string',
            'job_longitude' => 'required|string',
            'smpk_no' => 'required|string',
            'duration_day' => 'required|integer',
            'duration_week' => 'required|integer',
            'duration_month' => 'required|integer',
            'duration_year' => 'required|integer',
            'start_date' => 'required|date',
            'end_date' => 'required|date',
            'value' => 'required|integer',
            'description' => 'required|string',
        ]);
        $procurement->update($form);
        return back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Procurement $procurement)
    {
        $procurement->delete();
        return back();
    }
}
