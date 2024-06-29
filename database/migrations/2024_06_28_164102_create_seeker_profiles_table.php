<?php

use App\Models\User;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('seeker_profiles', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(User::class);
            $table->string('dob');
            $table->string('contact_number1');
            $table->string('contact_number2')->default('');
            $table->string('address');
            $table->longText('education');
            $table->longText('objective');
            $table->longText('personal_information');
            $table->longText('work_experience');
            $table->longText('job_preference');
            $table->longText('references');
            $table->longText('specializations');
            $table->longText('skills');
            $table->longText('social_accounts');
            $table->longText('other_information');
            $table->boolean('display_socialmedia')->default(false);
            $table->boolean('profile_searchable')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('seeker_profiles');
    }
};
