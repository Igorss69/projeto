import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import '../styles/style.css'

function Formulario() {

  const navigation = useNavigation();

  const [temperatura, setTemperatura] = useState("");
  const [pressaoSistolica, setPressaoSistolica] = useState("");
  const [pressaoDiastolica, setPressaoDiastolica] = useState("");
  const [frequenciaRespiratoria, setFrequenciaRespiratoria] = useState("");
  const [frequenciaCardiaca, setFrequenciaCardiaca] = useState("");

  const [classRespiracao, setRespiracao] = useState("");
  const [classFreqCardiaca, setFrequcardiaca] = useState("");
  const [classTemperatura, setClasstemperatura] = useState("");
  const [classPressaoArterial, setClassPressaoArterial] = useState("")

  const formulario ={
    temperatura: temperatura,
    pasistolica: pressaoSistolica,
    paditolica: pressaoDiastolica,
    frequencia: frequenciaRespiratoria,
    cardiaca: frequenciaCardiaca
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/formulario", formulario);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  function calcular() {
    var classRespiracao = ""
    var classFreqcardica = ""
    var classPressaoArterial = ""
    var classTemperatura = ""

     // Classificação da Pressão Arterial
     if(pressaoSistolica < 90 && pressaoDiastolica < 60) {
      classPressaoArterial = 'Hipotensão';
      } else if(pressaoSistolica >= 90 && pressaoSistolica <= 130 && pressaoDiastolica >= 60 && pressaoDiastolica <= 85) {
          classPressaoArterial = 'Normotensão';
      } else if(pressaoSistolica >= 130 && pressaoSistolica <= 139 && pressaoDiastolica >= 85 && pressaoDiastolica <= 89) {
          classPressaoArterial = 'Normotensão Limítrofe';
      } else if(pressaoSistolica >= 140 && pressaoSistolica <= 159 && pressaoDiastolica >= 90 && pressaoDiastolica <= 99) {
          classPressaoArterial = 'Hipertensão Leve';
      } else if(pressaoSistolica >= 160 && pressaoSistolica <= 179 && pressaoDiastolica >= 100 && pressaoDiastolica <= 109) {
          classPressaoArterial = 'Hipertensão Moderada';
      } else if(pressaoSistolica >= 180 && pressaoDiastolica >= 110) {
          classPressaoArterial = 'Hipertensão Grave';
      }
      setClassPressaoArterial("Pressão Arterial: " + classPressaoArterial)


     // Classificação da temperatura
     if (temperatura < 35) {
         classTemperatura = "Hipotermia";
     } else if (temperatura >= 36.1 && temperatura <= 37.2) {
         classTemperatura = "Normotermia ou Afebril";
     } else if (temperatura >= 37.3 && temperatura <= 37.7) {
         classTemperatura = "Estado Febril/Subfebril";
     } else if (temperatura >= 37.8 && temperatura <= 38.9) {
         classTemperatura = "Febre";
     } else if (temperatura >= 39 && temperatura <= 40) {
         classTemperatura = "Pirexia";
     } else {
         classTemperatura = "Hiperpirexia";
     }
    setClasstemperatura("Temperatura: " + classTemperatura);

     // Classificação da Frequência Respiratória
     if (frequenciaRespiratoria < 14) {
      classRespiracao = "Bradipneico";
    } else if (frequenciaRespiratoria >= 14 && frequenciaRespiratoria <= 20) {
        classRespiracao = "Eupneico";
    } else {
        classRespiracao = "Taquipineico";
    }
    setRespiracao('Frequência Respiratoria: ' + classRespiracao)


    // Classificação da Frequência Cardíaca
    if(frequenciaCardiaca < 60) {
      classFreqcardica = 'Bradicardia';
    } else if(frequenciaCardiaca >= 60 && frequenciaCardiaca <= 100) {
        classFreqcardica = 'Normocardia';
    } else if(frequenciaCardiaca > 100) {
        classFreqcardica = 'Taquicardia';
    }
    setFrequcardiaca('Frequência Cardíaca: ' + classFreqcardica);
  }

  
  function navegar(){
    navigation.navigate('Covid');
  }

     
  return (

    <form onSubmit={handleSubmit}>
      <div class="formulario">
        <div className="form-group" class="sintomas">
          <label htmlFor="temperatura">Temperatura:</label><br/>
          <input
            type="text"
            className="form-control"
            id="temperatura"
            name="temperatura"
            class="input"
            value={temperatura}
            onChange={(e) => setTemperatura(e.target.value)}
          />
        </div>
        <div className="form-group" class="sintomas">
          <label htmlFor="frequenciaCardiaca">Frequência Cardíaca:</label><br/>
          <input
            type="text"
            className="form-control"
            id="frequenciaCardiaca"
            name="frequenciaCardiaca"
            class="input"
            value={frequenciaCardiaca}
            onChange={(e) => setFrequenciaCardiaca(e.target.value)}
          />
        </div>
        <div className="form-group" class="sintomas">
          <label htmlFor="pressaoSistolica">Pressão Sistólica:</label><br/>
          <input
            type="text"
            className="form-control"
            id="pressaoSistolica"
            name="pressaoSistolica"
            class="input"
            value={pressaoSistolica}
            onChange={(e) => setPressaoSistolica(e.target.value)}
          />
        </div>
        <div className="form-group" class="sintomas">
          <label htmlFor="pressaoDiastolica">Pressão Diastólica:</label><br/>
          <input
            type="text"
            className="form-control"
            id="pressaoDiastolica"
            name="pressaoDiastolica"
            class="input"
            value={pressaoDiastolica}
            onChange={(e) => setPressaoDiastolica(e.target.value)}
          />
        </div>
        <div className="form-group" class="sintomas">
          <label htmlFor="frequenciaRespiratoria">Frequência Respiratória:</label><br/>
          <input
            type="text"
            className="form-control"
            id="frequenciaRespiratoria"
            name="frequenciaRespiratoria"
            class="input"
            value={frequenciaRespiratoria}
            onChange={(e) => setFrequenciaRespiratoria(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={calcular}>
          Enviar
        </button><br/>
        <button className="btn btn-secondary" class="btnsec" onClick={navegar}>
          Proxima página
        </button>
      </div>
    </form>
  );
  
}

export default Formulario;
