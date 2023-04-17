<?php

namespace App\Http\Controllers;

use App\Models\Paciente;
use Illuminate\Http\Request;


class PacientesController extends Controller
{
    public function index(){
        return Paciente::all();
    }

    public function cadastrarPaciente(Request $request)
    {
        $paciente = new Paciente;
        $paciente->nome = $request->nome;
        $paciente->data_nascimento = $request->data_nascimento;
        $paciente->cpf = $request->cpf;
        $paciente->telefone = $request->telefone;
        $paciente->imagem = $request->imagem;

        $paciente->save();

        return response()->json([
            'message' => 'Paciente cadastrado com sucesso!',
            'paciente' => $paciente
        ]);
    }

    public function deletarPaciente($id){
    $paciente = Paciente::find($id);

    if (!$paciente) {
        return response()->json([
            'message' => 'Paciente não encontrado'
        ], 404);
    }

    $paciente->delete();

    return response()->json([
        'message' => 'Paciente removido com sucesso!'
    ]);
}


}