<?php

use Carbon\Carbon;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\JobTypeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\IndustryTypeController;
use App\Http\Controllers\PositionTypeController;
use App\Http\Controllers\RolePermissionController;
use App\Http\Controllers\VacancyController;
use App\Http\Controllers\Auth\VacancyController as AuthVacancyController;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
// 'canLogin' => Route::has('login'),
// 'canRegister' => Route::has('seeker/register'),
// 'laravelVersion' => Application::VERSION,
// 'phpVersion' => PHP_VERSION,
// 'year' => Carbon::now()->year
//     ]);
// });
Route::get('/', [VacancyController::class, 'index'])->name('vacancy.index');

Route::middleware('auth')->group(function () {
    Route::get('/auth/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/auth/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/auth/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware('auth')->group(function () {
    Route::get('/auth/dashboard', function () {
        return Inertia::render('Dashboard');
    })->middleware(['verified'])->name('dashboard');

    Route::get('/auth/vacancy', [AuthVacancyController::class, 'index'])->name('auth-vacancy.index');
    Route::get('/auth/vacancy/create', [AuthVacancyController::class, 'create'])->name('auth-vacancy.create');
    Route::get('/auth/vacancy/{slug}/edit', [AuthVacancyController::class, 'edit'])->name('auth-vacancy.edit');
    Route::put('/auth/vacancy/{slug}/update', [AuthVacancyController::class, 'update'])->name('auth-vacancy.update');
    Route::post('auth/vacancy', [AuthVacancyController::class, 'store'])->name('auth-vacancy.store');
});

Route::get('/role-permissions', [RolePermissionController::class, 'index'])
    ->middleware((['auth:sanctum', 'role:Superadmin']))->name('role.permissions');

Route::get('industry-type-list', [IndustryTypeController::class, 'list'])->name('industry-type.list');
Route::get('job-type-list', [JobTypeController::class, 'list'])->name('job-type.list');
Route::get('position-type-list', [PositionTypeController::class, 'list'])->name('position-type.list');

require __DIR__ . '/auth.php';
