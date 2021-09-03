<?php

namespace App\Http\Controllers;

use App\Models\ApbnBudget;
use App\Models\OpdWorkUnit;
use App\Models\Year;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ApbnBudgetController extends Controller
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
        $apbnBudgets = fn () => ApbnBudget::with('year', 'opdWorkUnit')->where(fn ($q) => $queryExists ? $q->where('budget', 'LIKE', '%' . $query . '%') : 1)->paginate($request->per_page ?? 10)->withQueryString();
        $years = fn () => Year::all();
        $opdWorkUnits = fn () => OpdWorkUnit::all();
        return Inertia::render('Data/ApbnBudget/Index', compact('apbnBudgets', 'years', 'opdWorkUnits'));
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
            'budget' => 'required|integer',
        ]);
        $request->user()->apbnBudgets()->create($form);
        return back();
    }

    public function update(Request $request, ApbnBudget $apbnBudget)
    {
        $form = $request->validate([
            'year_id' => 'required|integer',
            'opd_work_unit_id' => 'required|integer',
            'budget' => 'required|integer',
        ]);
        $apbnBudget->update($form);
        return back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(ApbnBudget $apbnBudget)
    {
        $apbnBudget->delete();
        return back();
    }
}
