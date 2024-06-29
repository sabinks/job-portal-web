<?php

namespace App\Http\Controllers;

use App\Models\IndustryType;
use Illuminate\Http\Request;

class IndustryTypeController extends Controller
{
    public function list()
    {
        $industryTypes = IndustryType::all();

        return response($industryTypes);
    }
}
