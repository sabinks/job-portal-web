<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules;
use Spatie\Permission\Models\Role;
use App\Http\Controllers\Controller;
use App\Jobs\SeekerRegisteredJob;
use App\Models\EmployerProfile;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\RedirectResponse;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Config;

class RegisteredEmployerController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Employer/Register', [
            'siteKey' => Config::get('custom.recaptch_site_key')
        ]);
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'organization_name' => 'required|string|max:100',
            'contact_number' => 'required|string|max:100',
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:' . User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);
        $role = Role::whereName('Employer')->first();
        EmployerProfile::create([
            'user_id' => $user->id,
            'organization_name' => $request->organization_name,
            'contact_number' => $request->contact_number,
            'industry_type_id' => 0
        ]);
        $user->assignRole($role);

        SeekerRegisteredJob::dispatch($user)->onQueue('default');
        Auth::login($user);

        return redirect(route('dashboard', absolute: false));
    }
}
