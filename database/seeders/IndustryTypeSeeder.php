<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Support\Str;
use App\Models\IndustryType;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class IndustryTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $industryTypes = [
            'Advertisement Agency',
            'Agriculture',
            'Forestry',
            'Fishing',
            'Poultry',
            'Airlines',
            'Architecture',
            'Interior Design Firm',
            'Associations',
        ];

        foreach ($industryTypes as $key => $industryType) {
            if (!IndustryType::whereName($industryType)->first()) {
                IndustryType::create([
                    'name' => $industryType,
                    'slug' => Str::slug($industryType),
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now()
                ]);
            }
        }
    }
}
