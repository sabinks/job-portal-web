<?php

namespace App\Http\Controllers\Auth;

use Carbon\Carbon;
use Inertia\Inertia;
use App\Models\Vacancy;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Models\EmployerProfile;
use App\Http\Controllers\Controller;
use Dotenv\Parser\Value;
use Illuminate\Support\Facades\Auth;

class VacancyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Auth/Vacancy/Index', [
            'employers' => EmployerProfile::has('vacancies')
                ->with(['vacancies:id,slug,job_title,created_for'])
                ->select('organization_name', 'user_id', 'slug')
                ->get(),
            'vacancies' => Vacancy::all(),
            // 'canLogin' => Route::has('login'),
            // 'canRegister' => Route::has('seeker/register'),
            // 'laravelVersion' => Application::VERSION,
            // 'phpVersion' => PHP_VERSION,
            'year' => Carbon::now()->year
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Auth/Vacancy/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'job_title' => 'required|string|max:255|min:5',
            "basic_information" => "required",
            "job_specification" => "",
            "job_description" => "required",
            "responsibilities" => "",
            "requirements" => "required",
            "qualifications" => "",
            "what_we_offer" => "",
            "note" => "",
            "working_time" => "",
            "footer_note" => "",
            "deadline" => "required",
        ]);

        $input = $request->only([
            "job_title",
            "basic_information",
            "job_specification",
            "job_description",
            "responsibilities",
            "requirements",
            "qualifications",
            "what_we_offer",
            "note",
            "working_time",
            "footer_note",
            "deadline"
        ]);
        $input['slug'] = Str::slug($request->job_title);
        $input['created_by'] = Auth::id();
        $input['user_id'] = Auth::id();
        Vacancy::create($input);
        return $request->session()->flash('message', 'New vacancy stored!');
        return redirect('/auth/vacancies');
    }

    /**
     * Display the specified resource.
     */
    public function show(Vacancy $vacancy)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $slug)
    {
        $vacancy = Vacancy::where('slug', $slug)->first();

        return Inertia::render('Auth/Vacancy/Edit')->with([
            'vacancy' => $vacancy
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, String $slug)
    {
        $request->validate([
            'job_title' => 'required|string|max:255|min:5',
            "basic_information" => "required",
            "job_specification" => "",
            "job_description" => "required",
            "responsibilities" => "",
            "requirements" => "required",
            "qualifications" => "",
            "what_we_offer" => "",
            "note" => "",
            "working_time" => "",
            "footer_note" => "",
            "deadline" => "required",
        ]);
        $vacancy = Vacancy::where('slug', $slug)->first();
        $input = $request->only([
            'job_title',
            "basic_information",
            "job_specification",
            "job_description",
            "responsibilities",
            "requirements",
            "qualifications",
            "what_we_offer",
            "note",
            "working_time",
            "footer_note",
            "deadline"
        ]);
        foreach ($input as $key => $value) {
            $vacancy[$key] = $value;
        }
        $vacancy['slug'] = Str::slug($request->job_title);
        $vacancy->update();
        $request->session()->flash('message', 'Vacancy updated!');
        return redirect('/auth/vacancy');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Vacancy $vacancy)
    {
        //
    }
}
