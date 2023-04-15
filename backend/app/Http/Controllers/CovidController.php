<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Covid;

class CovidController extends Controller
{
    public function store(Request $request){
        $idpaciente = $request->input('idpaciente');
        $sintomas = $request->input('sintomas');
    
        $covid = new Covid([
            'idpaciente' => $idpaciente,
            'sintomas' => $sintomas
        ]);
    
        $covid->save();
    }
}
