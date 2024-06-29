<?php

namespace Database\Seeders;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Role;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        if (!User::whereEmail('superadmin@mail.com')->first()) {
            $user = User::create([
                'name' => 'Superadmin',
                'email' => 'superadmin@mail.com',
                'password' => Hash::make('P@ss1234'),
                'email_verified_at' => Carbon::now(),
            ]);
            $role = Role::whereName('superadmin')->first();
            $user->assignRole($role);
        }
        if (!User::whereEmail('admin1@mail.com')->first()) {
            $user = User::create([
                'name' => 'Admin One',
                'email' => 'admin1@mail.com',
                'password' => Hash::make('P@ss1234'),
                'email_verified_at' => Carbon::now(),
            ]);
            $role = Role::whereName('admin')->first();
            $user->assignRole($role);
        }
        if (!User::whereEmail('employer1@mail.com')->first()) {
            $user = User::create([
                'name' => 'Employer One',
                'email' => 'employer1@mail.com',
                'password' => Hash::make('P@ss1234'),
                'email_verified_at' => Carbon::now(),
            ]);
            $role = Role::whereName('employer')->first();
            $user->assignRole($role);
        }
        if (!User::whereEmail('seeker1@mail.com')->first()) {
            $user = User::create([
                'name' => 'Seeker One',
                'email' => 'seeker1@mail.com',
                'password' => Hash::make('P@ss1234'),
                'email_verified_at' => Carbon::now(),
            ]);
            $role = Role::whereName('seeker')->first();
            $user->assignRole($role);
        }
    }
}
