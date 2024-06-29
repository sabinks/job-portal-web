<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $permissions = [
            ['name' => 'menu-job', 'category_name' => 'Job', 'method_name' => 'menu'],
            ['name' => 'list-job', 'category_name' => 'Job', 'method_name' => 'list'],
            ['name' => 'create-job', 'category_name' => 'Job', 'method_name' => 'create'],
            ['name' => 'show-job', 'category_name' => 'Job', 'method_name' => 'show'],
            ['name' => 'update-job', 'category_name' => 'Job', 'method_name' => 'update'],
            ['name' => 'delete-job', 'category_name' => 'Job', 'method_name' => 'delete'],

            ['name' => 'job-publish', 'category_name' => 'Job Publish', 'method_name' => 'other'],

            ['name' => 'menu-employer-profile', 'category_name' => 'Employer Profile', 'method_name' => 'menu'],
            ['name' => 'list-employer-profile', 'category_name' => 'Employer Profile', 'method_name' => 'list'],
            ['name' => 'create-employer-profile', 'category_name' => 'Employer Profile', 'method_name' => 'create'],
            ['name' => 'show-employer-profile', 'category_name' => 'Employer Profile', 'method_name' => 'show'],
            ['name' => 'update-employer-profile', 'category_name' => 'Employer Profile', 'method_name' => 'update'],
            ['name' => 'delete-employer-profile', 'category_name' => 'Employer Profile', 'method_name' => 'delete'],

            ['name' => 'menu-job-seekeer-profile', 'category_name' => 'Job Seeker Profile', 'method_name' => 'menu'],
            ['name' => 'list-job-seekeer-profile', 'category_name' => 'Job Seeker Profile', 'method_name' => 'list'],
            ['name' => 'create-job-seekeer-profile', 'category_name' => 'Job Seeker Profile', 'method_name' => 'create'],
            ['name' => 'show-job-seekeer-profile', 'category_name' => 'Job Seeker Profile', 'method_name' => 'show'],
            ['name' => 'update-job-seekeer-profile', 'category_name' => 'Job Seeker Profile', 'method_name' => 'update'],
            ['name' => 'delete-job-seekeer-profile', 'category_name' => 'Job Seeker Profile', 'method_name' => 'delete'],

            ['name' => 'menu-job-category', 'category_name' => 'Job Category', 'method_name' => 'menu'],
            ['name' => 'list-job-category', 'category_name' => 'Job Category', 'method_name' => 'list'],
            ['name' => 'create-job-category', 'category_name' => 'Job Category', 'method_name' => 'create'],
            ['name' => 'show-job-category', 'category_name' => 'Job Category', 'method_name' => 'show'],
            ['name' => 'update-job-category', 'category_name' => 'Job Category', 'method_name' => 'update'],
            ['name' => 'delete-job-category', 'category_name' => 'Job Category', 'method_name' => 'delete'],

            ['name' => 'menu-industry-type', 'category_name' => 'Industry Type', 'method_name' => 'menu'],
            ['name' => 'list-industry-type', 'category_name' => 'Industry Type', 'method_name' => 'list'],
            ['name' => 'create-industry-type', 'category_name' => 'Industry Type', 'method_name' => 'create'],
            ['name' => 'show-industry-type', 'category_name' => 'Industry Type', 'method_name' => 'show'],
            ['name' => 'update-industry-type', 'category_name' => 'Industry Type', 'method_name' => 'update'],
            ['name' => 'delete-industry-type', 'category_name' => 'Industry Type', 'method_name' => 'delete'],

            ['name' => 'menu-job-type', 'category_name' => 'Job Type', 'method_name' => 'menu'],
            ['name' => 'list-job-type', 'category_name' => 'Job Type', 'method_name' => 'list'],
            ['name' => 'create-job-type', 'category_name' => 'Job Type', 'method_name' => 'create'],
            ['name' => 'show-job-type', 'category_name' => 'Job Type', 'method_name' => 'show'],
            ['name' => 'update-job-type', 'category_name' => 'Job Type', 'method_name' => 'update'],
            ['name' => 'delete-job-type', 'category_name' => 'Job Type', 'method_name' => 'delete'],

            ['name' => 'menu-position-type', 'category_name' => 'Position Type', 'method_name' => 'menu'],
            ['name' => 'list-position-type', 'category_name' => 'Position Type', 'method_name' => 'list'],
            ['name' => 'create-position-type', 'category_name' => 'Position Type', 'method_name' => 'create'],
            ['name' => 'show-position-type', 'category_name' => 'Position Type', 'method_name' => 'show'],
            ['name' => 'update-position-type', 'category_name' => 'Position Type', 'method_name' => 'update'],
            ['name' => 'delete-position-type', 'category_name' => 'Position Type', 'method_name' => 'delete'],

        ];

        foreach ($permissions as $permission) {
            if (!Permission::whereName($permission)->first()) {
                Permission::create([
                    'name' => $permission['name'],
                    'category_name' =>  $permission['category_name'],
                    'method_name' => $permission['method_name'],
                    'guard_name' => 'api',
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now()
                ]);
            }
        }
    }
}
