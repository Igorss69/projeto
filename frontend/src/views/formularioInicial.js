import React, { useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';

function Formulario({ route }) {
  const [temperatura, setTemperatura] = useState("");
  const [pressaoSistolica, setPressaoSistolica] = useState("");
  const [pressaoDiastolica, setPressaoDiastolica] = useState("");
  const [frequenciaRespiratoria, setFrequenciaRespiratoria] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(route);
    try {
      const response = await axios.post(
        `http://localhost:8000/api/formulario/`, 
        {
          temperatura: temperatura,
          pressao_sistolica: pressaoSistolica,
          pressao_diastolica: pressaoDiastolica,
          frequencia_respiratoria: frequenciaRespiratoria,
        }
      );
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
