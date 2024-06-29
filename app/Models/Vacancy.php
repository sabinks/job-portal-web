<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vacancy extends Model
{
    use HasFactory;
    protected $fillable = [
        "job_title",
        "slug",
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
        "deadline",
        "created_for",
        "created_by"
    ];
}
