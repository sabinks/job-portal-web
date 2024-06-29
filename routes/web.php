<?php

use App\Http\Controllers\IndustryTypeController;
use App\Http\Controllers\JobTypeController;
use App\Http\Controllers\PositionTypeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RolePermissionController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});
Route::get('/role-permissions', [RolePermissionController::class, 'index'])->middleware(('auth:sanctum'))->name('role.permissions');

Route::get('industry-type-list', [IndustryTypeController::class, 'list'])->name('industry-type.list');
Route::get('job-type-list', [JobTypeController::class, 'list'])->name('job-type.list');
Route::get('position-type-list', [PositionTypeController::class, 'list'])->name('position-type.list');

require __DIR__ . '/auth.php';
