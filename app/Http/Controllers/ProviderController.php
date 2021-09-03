<?php

namespace App\Http\Controllers;

use App\Models\Provider;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProviderController extends Controller
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
        $providers = fn () => Provider::where(fn ($q) => $queryExists ? $q->where('rkn_nama', 'LIKE', '%' . $query . '%') : 1)->paginate($request->per_page ?? 10)->withQueryString();
        return Inertia::render('Lpse/Provider/Index', compact('providers'));
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
            'btu_id' => 'required|string',
            'cer_id' => 'required|string',
            'kbp_id' => 'required|string',
            'audittype' => 'required|string',
            'audituser' => 'required|string',
            'auditupdate' => 'required|string',
            'rkn_nama' => 'required|string',
            'rkn_alamat' => 'required|string',
            'rkn_kodepos' => 'required|string',
            'rkn_telepon' => 'required|string',
            'rkn_fax' => 'required|string',
            'rkn_mobile_phone' => 'required|string',
            'rkn_npwp' => 'required|string',
            'rkn_pkp' => 'required|string',
            'rkn_statcabang' => 'required|string',
            'rkn_email' => 'required|string',
            'rkn_website' => 'required|string',
            'rkn_tgl_daftar' => 'required|string',
            'rkn_tgl_setuju' => 'required|string',
            'rkn_almtpusat' => 'required|string',
            'rkn_telppusat' => 'required|string',
            'rkn_faxpusat' => 'required|string',
            'rkn_emailpusat' => 'required|string',
            'rkn_namauser' => 'required|string',
            'rkn_isactive' => 'required|string',
            'rkn_status' => 'required|string',
            'rkn_keterangan' => 'required|string',
            'pps_id' => 'required|string',
            'rkn_status_verifikasi' => 'required|string',
            'ver_namauser' => 'required|string',
            'repo_id' => 'required|string',
            'rkn_namapusat' => 'required|string',
            'ngr_id' => 'required|string',
            'kota' => 'required|string',
            'status_migrasi' => 'required|string',
            'last_sync_vms' => 'required|string',
            'passw' => 'required|string',
            'isbuiltin' => 'required|string',
            'disableuser' => 'required|string',
            'reset_password' => 'required|string',
            'ams_id' => 'required|string',
            'edited_data' => 'required|string',
        ]);
        Provider::create($form);
        return back();
    }

    public function update(Request $request, Provider $provider)
    {
        $form = $request->validate([
            'name' => 'required|string',
        ]);
        $provider->update($form);
        return back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Provider $provider)
    {
        $provider->delete();
        return back();
    }
}
