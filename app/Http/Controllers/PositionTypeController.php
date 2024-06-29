<?php

namespace App\Http\Controllers;

use App\Models\PositionType;
use Illuminate\Http\Request;

class PositionTypeController extends Controller
{
    public function list()
    {
        $positionTypes = PositionType::all();

        return response($positionTypes);
    }
}
