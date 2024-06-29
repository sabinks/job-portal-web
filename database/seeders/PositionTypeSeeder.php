<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Support\Str;
use App\Models\PositionType;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class PositionTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $positionTypes = [
            'Senior Level',
            'Top Level',
            'Entry Level',
            'Junior Level',
            'Mid Level'
        ];

        foreach ($positionTypes as $key => $positionType) {
            if (!PositionType::whereName($positionType)->first()) {
                PositionType::create([
                    'name' => $positionType,
                    'slug' => Str::slug($positionType),
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now()
                ]);
            }
        }
    }
}
