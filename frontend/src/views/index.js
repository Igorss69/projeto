import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import 'bootstrap/dist/css/bootstrap.min.css';

function Index() {
  const [apiData, setApiData] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/pacientes")
      .then((response) => {
        setApiData(response.data);
      })
      .catch(() => {
        console.log('Error');
      })
  }, []);
  

  function handleCadastroClick() {
    navigation.navigate('Cadastro');
  }

  function handleFormularioClick(id) {
    navigation.navigate('Formulario', {pacienteid: id});
  }

  function handleClick(id) {
    axios.delete(`http://127.0.0.1:8000/api/deletar_paciente/${id}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  


  return (
    <div>
      <h1>Lista de Pacientes:</h1>
      <div>
        { apiData.map((paciente) => (
          <div key={paciente.cpf}>
            <button onClick={() => handleFormularioClick(paciente.id)}>dados</button>

            <p>Nome: {paciente.nome}</p>
            <p>CPF: {paciente.cpf}</p>
            <p>Telefone: {paciente.telefone}</p>
            <button onClick={() => handleClick(paciente.id)}>Deletar</button>
          </div>
        )) }
      </div>
      <button onClick={handleCadastroClick}>Cadastro</button>
    </div>
  );
}

export default Index;
