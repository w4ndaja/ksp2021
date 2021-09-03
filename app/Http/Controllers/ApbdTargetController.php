<?php

namespace App\Http\Controllers;

use App\Models\ApbdTarget;
use App\Models\OpdWorkUnit;
use App\Models\Province;
use App\Models\Year;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ApbdTargetController extends Controller
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
        $apbdTargets = fn () => ApbdTarget::with('year', 'opdWorkUnit')->where(fn ($q) => $queryExists ? $q->where('january', 'LIKE', '%' . $query . '%') : 1)->paginate($request->per_page ?? 10)->withQueryString();
        $years = fn () => Year::all();
        $opdWorkUnits = fn () => OpdWorkUnit::all();
        return Inertia::render('Data/ApbdTarget/Index', compact('apbdTargets', 'years', 'opdWorkUnits'));
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
            'january' => 'required|integer',
            'february' => 'required|integer',
            'march' => 'required|integer',
            'april' => 'required|integer',
            'mei' => 'required|integer',
            'june' => 'required|integer',
            'july' => 'required|integer',
            'august' => 'required|integer',
            'september' => 'required|integer',
            'october' => 'required|integer',
            'november' => 'required|integer',
            'december' => 'required|integer',
        ]);
        $request->user()->apbdTargets()->create($form);
        return back();
    }

    public function update(Request $request, ApbdTarget $apbdTarget)
    {
        $form = $request->validate([
            'year_id' => 'required|integer',
            'opd_work_unit_id' => 'required|integer',
            'january' => 'required|integer',
            'february' => 'required|integer',
            'march' => 'required|integer',
            'april' => 'required|integer',
            'mei' => 'required|integer',
            'june' => 'required|integer',
            'july' => 'required|integer',
            'august' => 'required|integer',
            'september' => 'required|integer',
            'october' => 'required|integer',
            'november' => 'required|integer',
            'december' => 'required|integer',
        ]);
        $apbdTarget->update($form);
        return back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(ApbdTarget $apbdTarget)
    {
        $apbdTarget->delete();
        return back();
    }
}
