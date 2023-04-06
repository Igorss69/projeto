<?php

namespace App\Http\Controllers;

use App\Models\Formulario;
use Illuminate\Http\Request;

class FormulariosController extends Controller
{
    public function formularioInicial(Request $request)
    {
        // Acessa os parâmetros enviados no corpo da requisição POST
        $temperatura = $request->input('temperatura');
        $pressaoSistolica = $request->input('pasistolica');
        $pressaoDiastolica = $request->input('paditolica');
        $frequenciaRespiratoria = $request->input('frequencia');
        $pacienteid = $request->input('paciente');

        // Cria um novo registro no banco de dados usando o modelo "Formulario"
        $formulario = new Formulario([
            'pacienteid' => $pacienteid,
            'temperatura' => $temperatura,
            'pa_sistolica' => $pressaoSistolica,
            'pa_diastolica' => $pressaoDiastolica,
            'f_respiratoria' => $frequenciaRespiratoria,
        ]);

        // Salva o registro no banco de dados
        $formulario->save();

        return response()->json([
            'success' => true,
            'message' => 'Dados do paciente atualizados com sucesso!'
        ]);
    }
}
