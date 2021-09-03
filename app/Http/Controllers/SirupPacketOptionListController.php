<?php

namespace App\Http\Controllers;

use App\Http\Resources\SirupPacketOptionListResource;
use App\Models\SirupPacket;
use Illuminate\Http\Request;

class SirupPacketOptionListController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        return SirupPacketOptionListResource::collection(SirupPacket::where('nama', 'LIKE', '%' . $request->q . '%')->cursorPaginate(10));
    }
}
