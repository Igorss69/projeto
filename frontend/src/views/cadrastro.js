import React from "react";
import { useState} from "react";
import axios from "axios";
import '../styles/style.css'
import { useNavigation } from '@react-navigation/native';

function Cadastro() {

  const navigation = useNavigation();

  const [nome, setNome] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");


  const paciente = {
    nome: nome,
    data_nascimento: dataNascimento,
    cpf: cpf,
    telefone: telefone
  };

  function handleSubmit(event) {
    event.preventDefault();
    axios.post("http://127.0.0.1:8000/api/cadastrar_paciente", paciente)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

      navigation.navigate('Index');
  }

  return (
    <form className="form-group" onSubmit={handleSubmit}>
    <div class="cadpacientes">
      <div className="form-group">
        <label htmlFor="nome">Nome:</label><br/>
        <input
          id="nome"
          className="form-control"
          type="text"
          class="pac"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="dataNascimento">Data de nascimento:</label><br/>
        <input
          id="dataNascimento"
          className="form-control"
          type="date"
          class="pac"
          value={dataNascimento}
          onChange={(event) => setDataNascimento(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="cpf">CPF:</label><br/>
        <input
          id="cpf"
          className="form-control"
          type="text"
          class="pac"
          value={cpf}
          onChange={(event) => setCpf(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="telefone">Telefone:</label><br/>
        <input
          id="telefone"
          className="form-control"
          type="text"
          class="pac"
          value={telefone}
          onChange={(event) => setTelefone(event.target.value)}
        />
      </div><br/>
      <button type="submit" className="btn btn-primary">
        Enviar
      </button>
    </div>
  </form>

  );
}

export default Cadastro;
