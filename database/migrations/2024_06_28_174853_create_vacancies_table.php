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
            $table->unsignedBigInteger('created_for')->comment('employer information');
            $table->string('job_title');
            $table->longText('basic_information');
            $table->longText('job_specification');
            $table->longText('job_description');
            $table->longText('responsibilities');
            $table->longText('requirements');
            $table->longText('qualifications');
            $table->longText('what_we_offer');
            $table->longText('note');
            $table->longText('working_time');
            $table->longText('footer_note');
            $table->unsignedBigInteger('views_count');
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
