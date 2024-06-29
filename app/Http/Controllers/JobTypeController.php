<?php

namespace App\Http\Controllers;

use App\Models\JobType;
use Illuminate\Http\Request;

class JobTypeController extends Controller
{
    public function list()
    {
        $jobTypes = JobType::all();

        return response($jobTypes);
    }
}
