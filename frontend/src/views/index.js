import React, { useState, useEffect, ImageBackground } from 'react';
import axios from 'axios';
import {useNavigation } from '@react-navigation/native';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css'
import { BsChevronRight } from 'react-icons/bs';



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
    axios.post("http://127.0.0.1:8000/api/formulariodados", id)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
    navigation.navigate('Formulario');
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
          <div class="img"> 
            <div class="container">
              <h1 class="titulo">Lista de Pacientes:</h1>
              <div className="list-group mb-4" class="divinicial">
                { apiData.map((paciente) => (
                  <div className="list-group-item" key={paciente.cpf}>
                    <button className="btn btn-outline-primary mr-2" class="bot" onClick={() => handleFormularioClick(paciente.id)}><BsChevronRight /></button><br/>
                    <img src={paciente.imagem} alt={`Imagem de ${paciente.nome}`} />
                    <span>Nome: {paciente.nome}</span>
                    <br />
                    <span>CPF: {paciente.cpf}</span>
                    <br />
                    <span>Telefone: {paciente.telefone}</span><br/>
                    <button className="btn btn-outline-danger ml-2" class="del" onClick={() => handleClick(paciente.id)}>Deletar</button>
                  </div>
                )) }
              </div>
              <button className="btn btn-primary" onClick={handleCadastroClick}>Cadastrar</button>
                  </div>
          </div>
  );
  
}

export default Index;
