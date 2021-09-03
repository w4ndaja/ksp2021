<?php

namespace App\Http\Controllers;

use App\Models\TimelineProgress;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TimelineProgressController extends Controller
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
        $timelineProgress = fn () => TimelineProgress::where(fn ($q) => $queryExists ? $q->where('description', 'LIKE', '%' . $query . '%') : 1)->paginate($request->per_page ?? 10)->withQueryString();
        return Inertia::render('Parameter/TimelineProgress/Index', compact('timelineProgress'));
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
            'procurement_id' => 'required|integer',
            'provider_id' => 'required|integer',
            'description' => 'required|string',
            'status' => 'required|string',
            'done_at' => 'sometimes|nullable|date',
        ]);
        TimelineProgress::create($form);
        return back();
    }

    public function update(Request $request, TimelineProgress $timelineProgress)
    {
        $form = $request->validate([
            'procurement_id' => 'required|integer',
            'provider_id' => 'required|integer',
            'description' => 'required|string',
            'status' => 'required|string',
            'done_at' => 'sometimes|nullable|date',
        ]);
        $timelineProgress->update($form);
        return back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(TimelineProgress $timelineProgress)
    {
        $timelineProgress->delete();
        return back();
    }
}
