<?php

namespace Database\Seeders;

use App\Models\District;
use App\Models\Province;
use App\Models\Regency;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(LevelSeeder::class);
        \App\Models\User::factory()->make(['username' => 'admin'])->save();
        $this->call(IndoRegionSeeder::class);
        $this->call(WorkingAreaSeeder::class);
        $this->call(OpdWorkUnitSeeder::class);
        $this->call(YearSeeder::class);
    }
}
