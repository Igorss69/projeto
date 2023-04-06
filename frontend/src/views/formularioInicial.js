import React, { useState } from "react";
import axios from "axios";
import { useRoute } from '@react-navigation/native';

function Formulario() {
  const [temperatura, setTemperatura] = useState("");
  const [pressaoSistolica, setPressaoSistolica] = useState("");
  const [pressaoDiastolica, setPressaoDiastolica] = useState("");
  const [frequenciaRespiratoria, setFrequenciaRespiratoria] = useState("");

  const route = useRoute();
  const pacienteid = route.params;

  const formulario ={
    paciente: pacienteid,
    temperatura: temperatura,
    pasistolica: pressaoSistolica,
    paditolica: pressaoDiastolica,
    frequencia: frequenciaRespiratoria
  }

  

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(route);
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/formulario", formulario);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (

    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="temperatura">Temperatura:</label>
        <input
          type="text"
          id="temperatura"
          name="temperatura"
          value={temperatura}
          onChange={(e) => setTemperatura(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="pressaoSistolica">Pressão Sistólica:</label>
        <input
          type="text"
          id="pressaoSistolica"
          name="pressaoSistolica"
          value={pressaoSistolica}
          onChange={(e) => setPressaoSistolica(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="pressaoDiastolica">Pressão Diastólica:</label>
        <input
          type="text"
          id="pressaoDiastolica"
          name="pressaoDiastolica"
          value={pressaoDiastolica}
          onChange={(e) => setPressaoDiastolica(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="frequenciaRespiratoria">Frequência Respiratória:</label>
        <input
          type="text"
          id="frequenciaRespiratoria"
          name="frequenciaRespiratoria"
          value={frequenciaRespiratoria}
          onChange={(e) => setFrequenciaRespiratoria(e.target.value)}
        />
      </div>
      <button type="submit">Enviar</button>
      
    </form>
      );
  
}

export default Formulario;
