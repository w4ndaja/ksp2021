<?php

namespace App\Http\Controllers;

use App\Http\Resources\RupPacketOptionListCollection;
use App\Http\Resources\RupPacketOptionListResource;
use App\Models\RupPacket;
use Illuminate\Http\Request;

class RupPacketOptionListController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        return RupPacketOptionListResource::collection(RupPacket::where('kegiatan', 'LIKE', '%' . $request->q . '%')->cursorPaginate(10));
    }
}
