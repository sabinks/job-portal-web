<?php

use App\Models\User;
use App\Models\Vacancy;
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
        Schema::create('applied_vacancies', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(User::class);
            $table->foreignIdFor(Vacancy::class);
            $table->string('applied_at');
            $table->boolean('applied')->default(false);
            $table->boolean('screened')->default(false);
            $table->boolean('shortlisted')->default(false);
            $table->boolean('interviewed')->default(false);
            $table->boolean('selected')->default(false);
            $table->boolean('fulfilled')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('applied_vacancies');
    }
};
