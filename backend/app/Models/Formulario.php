<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Formulario extends Model
{
    protected $fillable = [
        'nome',
        'temperatura',
        'pa_sistolica',
        'pa_diastolica',
        'f_respiratoria'
    ];
}

