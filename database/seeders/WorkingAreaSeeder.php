<?php

namespace Database\Seeders;

use App\Models\WorkingArea;
use Illuminate\Database\Seeder;

class WorkingAreaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $workingAreas = [
            ['code' => 1, 'name' => 'Daker 1'],
            ['code' => 2, 'name' => 'Daker 2'],
            ['code' => 3, 'name' => 'Daker 3'],
            ['code' => 4, 'name' => 'Daker 4'],
            ['code' => 5, 'name' => 'Daker 5'],
            ['code' => 6, 'name' => 'Daker 6'],
        ];
        collect($workingAreas)->each(fn ($workingArea) => WorkingArea::create($workingArea));
    }
}
