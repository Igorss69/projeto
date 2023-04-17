import React from "react";
import { useState} from "react";
import axios from "axios";
import '../styles/style.css'
import { useNavigation } from '@react-navigation/native';
import InputMask from "react-input-mask";
import MaskedInput from "react-text-mask";


function Cadastro() {

  const navigation = useNavigation();

  const [nome, setNome] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [imagem, setImagem] = useState(null);


  function handleSubmit(event) {
    event.preventDefault();
  
    const formData = new FormData();
    formData.append('nome', nome);
    formData.append('data_nascimento', dataNascimento);
    formData.append('cpf', cpf);
    formData.append('telefone', telefone);
    formData.append('imagem', imagem);
  
    axios.post("http://127.0.0.1:8000/api/cadastrar_paciente", formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  
    alert('Usuário cadastrado com sucesso');
    navigation.navigate("Index");
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
        <InputMask
        mask="999.999.999-99"
        value={cpf}
        class="input"
        onChange={(event) => setCpf(event.target.value)}
      />
      </div>
      <div className="form-group">
        <label htmlFor="telefone">Telefone:</label><br/>
        <MaskedInput
        mask={[
          "(",
          /[1-9]/,
          /\d/,
          ")",
          " ",
          /\d/,
          /\d/,
          /\d/,
          /\d/,
          "-",
          /\d/,
          /\d/,
          /\d/,
          /\d/,
        ]}
        value={telefone}
        class="input"
        onChange={(event) => setTelefone(event.target.value)}
      />

      </div><br/>
      <div className="form-group">
        <label htmlFor="imagem">Imagem:</label>
        <input
          id="imagem"
          type="file"
          className="form-control-file"
          onChange={(event) => setImagem(event.target.files[0])}
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
