<?php

use App\Http\Controllers\CovidController;
use App\Http\Controllers\PacientesController;
use App\Http\Controllers\FormulariosController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('pacientes', [PacientesController::class, "index"]);
Route::post('/cadastrar_paciente', [PacientesController::class, 'cadastrarPaciente'])->name('cadastrar_paciente');
Route::delete('/deletar_paciente/{id}', [PacientesController::class, 'deletarPaciente'])->name('deletar_paciente');
Route::post('/formulario', [FormulariosController::class, 'formularioInicial'])->name('formularioInicial');
Route::get('/formulario', [FormulariosController::class, 'capturar'])->name('capturar');    
Route::post('/covid', [CovidController::class, 'store'])->name('store');


