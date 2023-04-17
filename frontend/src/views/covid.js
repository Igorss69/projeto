import { useState,  } from 'react';
import React from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigation } from '@react-navigation/native';
import '../styles/style.css'


function Covid(props){
  const navigation = useNavigation();

  const [pacienteId, setPacienteId] = useState(1);

  const [sintomas, setSintomas] = useState([]);

  function handleSintomasChange(e) {
    const value = e.target.value;
    if (e.target.checked) {
      setSintomas((sintomas) => [...sintomas, value]);
    } else {
      setSintomas((sintomas) => sintomas.filter((s) => s !== value));
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const sintomascov = {
        idpaciente: pacienteId,
        sintomas: sintomas.join(", "), 
      };
      const response = await axios.post("http://127.0.0.1:8000/api/covid", sintomascov);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }

    alert('Sintomas Cadastrado')
    navigation.navigate('Index');
  };
    
        return (
            <form onSubmit="">
              <div className="form-group" class="formulariocovid">
                <label className="sintoma" class="labelsintoma">Quais Sintomas está sentindo?</label>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="sintomas"
                    value="Febre"
                    onChange={handleSintomasChange}
                  />
                  <label className="form-check-label">Febre</label>
                </div>

              <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="sintomas"
                    value="Coriza"
                    onChange={handleSintomasChange}
                  />
                  <label className="form-check-label">Coriza</label>
                </div>

              <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="sintomas"
                    value="Nariz Entupido"
                    onChange={handleSintomasChange}
                  />
                  <label className="form-check-label">Nariz Entupido</label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="sintomas"
                    value="Cansaço"
                    onChange={handleSintomasChange}
                  />
                  <label className="form-check-label">Cansaço</label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="sintomas"
                    value="Tosse"
                    onChange={handleSintomasChange}
                  />
                  <label className="form-check-label">Tosse</label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="sintomas"
                    value="Dor de Cabeça"
                    onChange={handleSintomasChange}
                  />
                  <label className="form-check-label">Dor de Cabeça</label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="sintomas"
                    value="Dores no Corpo"
                    onChange={handleSintomasChange}
                  />
                  <label className="form-check-label">Dores no Corpo</label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="sintomas"
                    value="Mal Estar Geral"
                    onChange={handleSintomasChange}
                  />
                  <label className="form-check-label">Mal Estar Geral</label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="sintomas"
                    value="Dor de Garganta"
                    onChange={handleSintomasChange}
                  />
                  <label className="form-check-label">Dor de Garganta</label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="sintomas"
                    value="Dificuldade de Respirar"
                    onChange={handleSintomasChange}
                  />
                  <label className="form-check-label">Dificuldade de Respirar</label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="sintomas"
                    value="Falta de Paladar"
                    onChange={handleSintomasChange}
                  />
                  <label className="form-check-label">Falta de Paladar</label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="sintomas"
                    value="Falta de Olfato"
                    onChange={handleSintomasChange}
                  />
                  <label className="form-check-label">Falta de Olfato</label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="sintomas"
                    value="Dificuldade de Locomoção"
                    onChange={handleSintomasChange}
                  />
                  <label className="form-check-label">Dificuldade de Locomoção</label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="sintomas"
                    value="Diarréia"
                    onChange={handleSintomasChange}
                  />
                  <label className="form-check-label">Diarréia</label>
                </div>
                <button
                type="submit"
                className='btn btn-primary'
                class="botaocovid"
                onClick={handleSubmit}>Enviar</button>
              </div>
        
            </form>
          );
}

export default Covid;