<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Formulario extends Model
{
    protected $fillable = [
        'idpaciente',
        'f_cardiaca',
        'temperatura',
        'pa_sistolica',
        'pa_diastolica',
        'f_respiratoria'
    ];
}

