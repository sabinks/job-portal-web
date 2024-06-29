<?php

namespace Database\Seeders;

use Carbon\Carbon;
use App\Models\JobType;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class JobTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $jobTypes = [
            'Full Time',
            'Part Time',
            'Remote',
            'Contract',
            'Temporary'
        ];

        foreach ($jobTypes as $key => $jobType) {
            if (!JobType::whereName($jobType)->first()) {
                JobType::create([
                    'name' => $jobType,
                    // 'slug' => Str::slug($jobType),
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now()
                ]);
            }
        }
    }
}
