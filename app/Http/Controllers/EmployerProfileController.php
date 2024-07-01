<?php

namespace App\Http\Controllers;

use App\Models\EmployerProfile;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EmployerProfileController extends Controller
{
    public function show(string $slug)
    {
        $employer = EmployerProfile::where('slug', $slug)->with(['vacancies:id,created_for', 'industryType'])->first();
        return Inertia::render('Employer/Show')->with([
            'employer' => $employer,
        ]);
    }

    public function showVacancies(string $slug)
    {
        $employer = EmployerProfile::where('slug', $slug)->with(['vacancies', 'industryType'])->first();
        return Inertia::render('Employer/VacancyShow')->with([
            'employer' => $employer,
        ]);
    }
}
