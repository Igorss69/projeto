<?php

namespace App\Http\Controllers;

use App\Models\Formulario;
use App\Models\Paciente;
use Illuminate\Http\Request;

class FormulariosController extends Controller
{
    public function index(){
        return Formulario::all();
    }

    public function formularioInicial(Request $request, $pacienteID){

        $formulario = Formulario::findOrFail($pacienteID);

        $formulario = Formulario::where('paciente_id', $pacienteID)->firstOrFail();
    
        $formulario->temperatura = $request->input('temperatura');
        $formulario->pressao_sistolica = $request->input('pressaoSistolica');
        $formulario->pressao_diastolica = $request->input('pressaoDiastolica');
        $formulario->frequencia_respiratoria = $request->input('frequenciaRespiratoria');
    
        $formulario->save();
    
        return response()->json([
            'success' => true,
            'message' => 'Dados do paciente atualizados com sucesso!'
        ]);
    }
}
