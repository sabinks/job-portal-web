<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('vacancies', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('created_by');
            $table->unsignedBigInteger('user_id')->comment('employer information');
            $table->string('job_title');
            $table->string('slug');
            $table->longText('basic_information')->nullable();
            $table->longText('job_specification')->nullable();
            $table->longText('job_description')->nullable();
            $table->longText('responsibilities')->nullable();
            $table->longText('requirements')->nullable();
            $table->longText('qualifications')->nullable();
            $table->longText('what_we_offer')->nullable();
            $table->longText('note')->nullable();
            $table->longText('working_time')->nullable();
            $table->longText('footer_note')->nullable();
            $table->unsignedBigInteger('views_count')->default(0);
            $table->string('deadline');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('vacancies');
    }
};
