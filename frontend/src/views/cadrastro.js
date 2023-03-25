import React from "react";
import { useState} from "react";
import axios from "axios";

function Cadastro() {
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
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input
          type="text"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
        />
      </label>
      <br />
      <label>
        Data de nascimento:
        <input
          type="date"
          value={dataNascimento}
          onChange={(event) =>
            setDataNascimento(event.target.value)
          }
        />
      </label>
      <br />
      <label>
        CPF:
        <input
          type="text"
          value={cpf}
          onChange={(event) => setCpf(event.target.value)}
        />
      </label>
      <br />
      <label>
        Telefone:
        <input
          type="text"
          value={telefone}
          onChange={(event) =>
            setTelefone(event.target.value)
          }
        />
      </label>
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Cadastro;
