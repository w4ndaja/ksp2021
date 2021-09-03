<?php

namespace App\Http\Controllers;

use App\Models\Year;
use Illuminate\Http\Request;
use Inertia\Inertia;

class YearController extends Controller
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
        $years = fn () => Year::where(fn ($q) => $queryExists ? $q->where('year', 'LIKE', '%' . $query . '%') : 1)->paginate($request->per_page ?? 10)->withQueryString();
        return Inertia::render('Parameter/Year/Index', compact('years'));
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
            'year' => 'required|integer',
        ]);
        Year::create($form);
        return back();
    }

    public function update(Request $request, Year $year)
    {
        $form = $request->validate([
            'year' => 'required|integer',
        ]);
        $year->update($form);
        return back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Year $year)
    {
        $year->delete();
        return back();
    }
}
