<?php

namespace App\Http\Controllers;

use App\Models\RppData;
use App\Models\Year;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RppDataController extends Controller
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
        $rppData = fn () => RppData::with('year', 'workUnit')->where(fn ($q) => $queryExists ? $q->where('name', 'LIKE', '%' . $query . '%') : 1)->paginate($request->per_page ?? 10)->withQueryString();
        $years = fn () => Year::all();
        return Inertia::render('Lpse/RppData/Index', compact('rppData', 'years'));
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
            'letter_no' => 'required|string',
            'letter_date' => 'required|date',
            'attachment' => 'required|file|mimes:pdf,doc,docx,jpg,jpeg,png',
            'regarding' => 'required|string',
            'to' => 'required|string',
            'activity_number' => 'required|string',
            'rup_code' => 'required|string',
            'implement_method' => 'required|string',
            'pa_name' => 'required|string',
            'pa_nip' => 'required|string',
            'pa_position' => 'required|string',
            'pa_sk' => 'required|string',
            'pa_cp' => 'required|string',
            'job_location' => 'required|string',
            'hps_value' => 'required|integer',
            'fund_source' => 'required|string',
            'job_type' => 'required|string',
            'contract_type' => 'required|string',
            'support_count' => 'required|integer',
            'duration_day' => 'required|integer',
            'duration_week' => 'required|integer',
            'duration_month' => 'required|integer',
            'duration_year' => 'required|integer',
            'start_date' => 'required|date',
            'end_date' => 'required|date',
            'framework_attachment' => 'required|file|mimes:pdf,doc,docx,jpg,jpeg,png',
            'images_attachment' => 'required|file|mimes:pdf,doc,docx,jpg,jpeg,png',
            'hps_value_attachment' => 'required|file|mimes:pdf,doc,docx,jpg,jpeg,png',
            'contract_plan_attachment' => 'required|file|mimes:pdf,doc,docx,jpg,jpeg,png',
            'copy_of_dpa_attachment' => 'required|file|mimes:pdf,doc,docx,jpg,jpeg,png',
            'pptk_sk_attachment' => 'required|file|mimes:pdf,doc,docx,jpg,jpeg,png',
            'rup_attachment' => 'required|file|mimes:pdf,doc,docx,jpg,jpeg,png',
            'description' => 'required|string',
        ]);
        $form['attachment'] = $request->file('attachment')->store('rpp/attachment');
        $form['framework_attachment'] = $request->file('framework_attachment')->store('rpp/framework_attachment');
        $form['images_attachment'] = $request->file('images_attachment')->store('rpp/images_attachment');
        $form['hps_value_attachment'] = $request->file('hps_value_attachment')->store('rpp/hps_value_attachment');
        $form['contract_plan_attachment'] = $request->file('contract_plan_attachment')->store('rpp/contract_plan_attachment');
        $form['copy_of_dpa_attachment'] = $request->file('copy_of_dpa_attachment')->store('rpp/copy_of_dpa_attachment');
        $form['pptk_sk_attachment'] = $request->file('pptk_sk_attachment')->store('rpp/pptk_sk_attachment');
        $form['rup_attachment'] = $request->file('rup_attachment')->store('rpp/rup_attachment');
        RppData::create($form);
        return back();
    }

    public function update(Request $request, RppData $rppData)
    {
        $form = $request->validate([
            'year_id' => 'required',
            'letter_no' => 'required|string',
            'letter_date' => 'required|date',
            'attachment' => 'required|file|mimes:pdf,doc,docx,jpg,jpeg,png',
            'regarding' => 'required|string',
            'to' => 'required|string',
            'activity_number' => 'required|string',
            'rup_code' => 'required|string',
            'implement_method' => 'required|string',
            'pa_name' => 'required|string',
            'pa_nip' => 'required|string',
            'pa_position' => 'required|string',
            'pa_sk' => 'required|string',
            'pa_cp' => 'required|string',
            'job_location' => 'required|string',
            'hps_value' => 'required|integer',
            'fund_source' => 'required|string',
            'job_type' => 'required|string',
            'contract_type' => 'required|string',
            'support_count' => 'required|integer',
            'duration_day' => 'required|integer',
            'duration_week' => 'required|integer',
            'duration_month' => 'required|integer',
            'duration_year' => 'required|integer',
            'start_date' => 'required|date',
            'end_date' => 'required|date',
            'framework_attachment' => 'required|file|mimes:pdf,doc,docx,jpg,jpeg,png',
            'images_attachment' => 'required|file|mimes:pdf,doc,docx,jpg,jpeg,png',
            'hps_value_attachment' => 'required|file|mimes:pdf,doc,docx,jpg,jpeg,png',
            'contract_plan_attachment' => 'required|file|mimes:pdf,doc,docx,jpg,jpeg,png',
            'copy_of_dpa_attachment' => 'required|file|mimes:pdf,doc,docx,jpg,jpeg,png',
            'pptk_sk_attachment' => 'required|file|mimes:pdf,doc,docx,jpg,jpeg,png',
            'rup_attachment' => 'required|file|mimes:pdf,doc,docx,jpg,jpeg,png',
            'description' => 'required|string',
        ]);
        $rppData->update($form);
        return back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(RppData $rppData)
    {
        $rppData->delete();
        return back();
    }
}
