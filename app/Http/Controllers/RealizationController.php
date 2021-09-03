<?php

namespace App\Http\Controllers;

use App\Models\Realization;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RealizationController extends Controller
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
        $realizations = fn () => Realization::where(fn ($q) => $queryExists ? $q->where('year', 'LIKE', '%' . $query . '%') : 1)->paginate($request->per_page ?? 10)->withQueryString();
        return Inertia::render('Lpse/Realization/Index', compact('realizations'));
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
        Realization::create($form);
        return back();
    }

    public function update(Request $request, Realization $year)
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
    public function destroy(Realization $year)
    {
        $year->delete();
        return back();
    }
}
