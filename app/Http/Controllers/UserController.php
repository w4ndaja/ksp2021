<?php

namespace App\Http\Controllers;

use App\Models\OpdWorkUnit;
use App\Models\User;
use App\Models\WorkingArea;
use App\Models\WorkUnit;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
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
        $users = fn () => User::where('id', '<>', $request->user()->id)->where(fn ($q) => $queryExists ? $q->where('name', 'LIKE', '%' . $query . '%') : 1)->paginate($request->per_page ?? 10)->withQueryString();
        $opdWorkUnits = fn () => OpdWorkUnit::with('workUnits')->get();
        $workingAreas = fn () => WorkingArea::all();
        return Inertia::render('User/Index', compact('users', 'opdWorkUnits', 'workingAreas'));
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
            'name' => 'required|string',
            'username' => 'required|string|unique:users',
            'address' => 'sometimes|nullable|string',
            'phone' => 'sometimes|nullable|string',
            'opd_work_unit_id' => 'sometimes|nullable',
            'work_unit_id' => 'sometimes|nullable',
            'level_id' => 'sometimes|nullable|string',
            'working_area_id' => 'sometimes|nullable',
            'email' => 'required|email',
            'password' => 'sometimes|nullable|string|min:8',
            'password_confirmation' => 'required_with:password|same:password|string|min:8',
        ]);
        User::create($form);
        return back();
    }

    public function update(Request $request, User $user)
    {
        $form = $request->validate([
            'name' => 'required|string',
            'username' => 'required|string|unique:users,username,' . $user->id,
            // 'address' => 'required|string',
            // 'phone' => 'required|string',
            // 'opd_work_unit_id' => 'required',
            // 'work_unit_id' => 'required',
            // 'level_id' => 'required|string',
            // 'working_area_id' => 'required',
            'email' => 'required|email',
            'password' => 'sometimes|string|min:8',
        ]);
        $user->update($form);
        return back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        $user->delete();
        return back();
    }
}
