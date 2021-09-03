<?php

namespace App\Http\Controllers;

use App\Models\OpdWorkUnit;
use App\Models\SpjShopping;
use App\Models\Year;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SpjShoppingController extends Controller
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
        $spjShoppings = fn () => SpjShopping::where(fn ($q) => $queryExists ? $q->where('name', 'LIKE', '%' . $query . '%') : 1)->paginate($request->per_page ?? 10)->withQueryString();
        $years = fn () => Year::all();
        $opdWorkUnits = fn () => OpdWorkUnit::all();
        return Inertia::render('Lpse/SpjShopping/Index', compact('spjShoppings', 'years', 'opdWorkUnits'));
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
            'code' => 'required|string',
            'name' => 'required|string',
            'value' => 'required|integer',
            'status' => 'required|string',
            'file' => 'required|file|mime:docx,xls,xlsx,pdf',
        ]);
        SpjShopping::create($form);
        return back();
    }

    public function update(Request $request, SpjShopping $spjShopping)
    {
        $form = $request->validate([
            'year_id' => 'required|integer',
            'opd_work_unit_id' => 'required|integer',
            'code' => 'required|string',
            'name' => 'required|string',
            'value' => 'required|integer',
            'status' => 'required|string',
            'file' => 'required|file|mime:docx,xls,xlsx,pdf',
        ]);
        $spjShopping->update($form);
        return back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(SpjShopping $spjShopping)
    {
        $spjShopping->delete();
        return back();
    }
}
