<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;
use App\Models\EmployerProfile;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Redirect;
use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        return Inertia::render('Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
            'employer_profile' => Auth::user()->hasRole('Employer') ? Auth::user()->employer_profile : null,
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $request->user()->fill($request->validated());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }
        $request->user()->save();
        if ($request->hasFile('banner')) {
            $image = $request->file('banner');
            $employer = EmployerProfile::where('user_id', $request->user()->id)->first();
            $old_file_path = $employer['banner_storage_path'];
            $filename = time() . rand(10000, 99999) . "." . $image->getClientOriginalExtension();
            $result = $image->storeAs('/public/banner', $filename);
            $employer['banner'] =  $filename;
            $employer['banner_public_path'] = '/storage/banner/' . $filename;
            $employer['banner_storage_path'] = '/public/banner/' . $filename;
            $employer->update();
            if (Storage::exists($old_file_path)) {
                Storage::delete($old_file_path);
            }
        }


        return Redirect::route('profile.edit');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}
