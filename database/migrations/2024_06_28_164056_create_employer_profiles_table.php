<?php

use App\Models\User;
use App\Models\IndustryType;
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
        Schema::create('employer_profiles', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(User::class);
            $table->string('organization_name');
            $table->string('contact_number');
            $table->string('address');
            $table->string('banner');
            $table->string('banner_path');
            $table->boolean('display_address')->default(true);
            $table->boolean('make_profile_public')->default(true);
            $table->foreignIdFor(IndustryType::class);
            $table->boolean('display_industry_type')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('employer_profiles');
    }
};
