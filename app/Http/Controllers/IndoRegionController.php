<?php

namespace App\Http\Controllers;

use App\Models\District;
use App\Models\Province;
use App\Models\Regency;
use Illuminate\Http\Request;

class IndoRegionController extends Controller
{
    public function provinces()
    {
        return response()->json(Province::all());
    }

    public function regencies($province)
    {
        return response()->json(Regency::whereProvinceId($province)->get());
    }

    public function districs($regency)
    {
        return response()->json(District::whereRegencyId($regency)->get());
    }

}
