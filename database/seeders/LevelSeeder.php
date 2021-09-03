<?php

namespace Database\Seeders;

use App\Models\Level;
use Illuminate\Database\Seeder;

class LevelSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        collect([
            [
                'code' => 'kd',
                'name' => 'Kepala Daerah',
            ],
            [
                'code' => 'kadis',
                'name' => 'Kepala Dinas/Badan',
            ],
            [
                'code' => 'kauc',
                'name' => 'Kepala UPT / Cabdis',
            ],
            [
                'code' => 'kau',
                'name' => 'Kepala Unit',
            ],
            [
                'code' => 'pd',
                'name' => 'Pengelola Data'
            ],
        ])->each(fn ($item) => Level::create($item));
    }
}
