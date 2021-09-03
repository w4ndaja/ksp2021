<?php

namespace App\Http\Controllers;

use App\Models\Province;
use App\Models\RegencyBudget;
use App\Models\Year;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RegencyBudgetController extends Controller
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
        $regencyBudgets = fn () => RegencyBudget::with('year', 'regency.province')->where(fn ($q) => $queryExists ? $q->where('budget', 'LIKE', '%' . $query . '%') : 1)->paginate($request->per_page ?? 10)->withQueryString();
        $years = fn () => Year::all();
        $provinces = fn () => Province::all();
        return Inertia::render('Data/RegencyBudget/Index', compact('regencyBudgets', 'years', 'provinces'));
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
            'regency_id' => 'required|integer',
            'budget' => 'required|integer',
        ]);
        $request->user()->regencyBudgets()->create($form);
        return back();
    }

    public function update(Request $request, RegencyBudget $regencyBudget)
    {
        $form = $request->validate([
            'year_id' => 'required|integer',
            'regency_id' => 'required|integer',
            'budget' => 'required|integer',
        ]);
        $regencyBudget->update($form);
        return back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(RegencyBudget $regencyBudget)
    {
        $regencyBudget->delete();
        return back();
    }
}
