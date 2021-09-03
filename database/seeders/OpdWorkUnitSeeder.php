<?php

namespace Database\Seeders;

use App\Models\OpdWorkUnit;
use Illuminate\Database\Seeder;

class OpdWorkUnitSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        collect([
            'Dinas Pendidikan',
            'Dinas Kesehatan',
            'Rumah Sakit Jiwa',
            'Rumah Sakit Haji',
            'Dinas Bina Marga dan Bina Konstruksi',
            'Dinas Sumber Daya Air, Cipta Karya dan Tata Ruang',
            'Dinas Perumahan dan Kawasan Permukiman',
            'Badan Kesatuan Bangsa dan Politik',
            'Satuan Polisi Pamong Praja',
            'Badan Penanggulangan Bencana Daerah',
            'Dinas Sosial',
            'Dinas Tenaga Kerja',
            'Dinas Pemberdayaan Perempuan dan Perlindungan Anak',
            'Dinas Ketahanan Pangan dan Peternakan',
            'Dinas Lingkungan Hidup',
            'Dinas Kependudukan dan Pencatatan Sipil',
            'Dinas Pemberdayaan Masyarakat dan Desa',
            'Dinas Pengendalian Kependudukan dan Keluarga Berencana Daerah',
            'Dinas Perhubungan',
            'Dinas Komunikasi dan Informatika',
            'Dinas Koperasi dan Usaha Kecil Menengah',
            'Dinas Penanaman Modal dan Pelayanan Perizinan Terpadu Satu Pintu',
            'Dinas Pemuda dan Olahraga',
            'Dinas Kebudayaan dan Pariwisata',
            'Dinas Perpustakaan dan Arsip',
            'Dinas Kelautan dan Perikanan',
            'Dinas Tanaman Pangan dan Holtikultura',
            'Dinas Perkebunan',
            'Dinas Kehutanan',
            'Dinas Energi dan Sumber Daya Mineral',
            'Dinas Perindustrian dan Perdagangan',
            'Badan Perencanaan Pembangunan Daerah',
            'Badan Pengelolaan Keuangan dan Aset Daerah',
            'Badan Kepegawaian Daerah',
            'Badan Pengembangan Sumber Daya Manusia',
            'Badan Penelitian dan Pengembangan Daerah',
            'Sekretariat DPRD',
            'Inspektorat Daerah Provinsi',
            'Badan Pengelolaan Pajak dan Retribusi Daerah',
            'Badan Penghubung Daerah',
            'Biro Pemerintahan dan Otonomi Daerah',
            'Biro Hukum',
            'Biro Pengadaan Barang/Jasa',
            'Biro Perekonomian',
            'Biro Administrasi Pembangunan',
            'Biro Sosial dan Kesejahteraan',
            'Biro Umum ',
            'Biro Organisasi',
            'Biro Administrasi Pimpinan',
        ])->each(function ($val, $i) {
            OpdWorkUnit::create(['code' => $i + 1, 'name' => $val, 'working_area_id' => 1, 'province_id' => 12, 'city_id' => 1207, 'distric_id' => 1207050]);
        });
    }
}
