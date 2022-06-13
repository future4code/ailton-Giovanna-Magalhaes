import React, {Component} from 'react';


export default class Etapa1 extends Component {


    render () {
      return (
      <div>
         <div className='Etapa1'>
        <div>
          <h2>ETAPA 1 - DADOS GERAIS</h2>
          <h3>1. Qual o seu nome?</h3>
          <input placeholder = {"Nome"} />

          <h3>2. Qual sua idade?</h3>
          <input placeholder={"Idade"} />

          <h3>3. Qual o seu e-mail?</h3>
          <input placeholder={"Email"}/>

          <h3>4. Qual a sua escolaridade?</h3>
          <select id="Escolaridades" nome="Escolaridades">
            <option value="Ensino Médio Incompleto"> Ensino Médio Incompleto </option>
            <option value="Ensino Médio Completo"> Ensino Médio Completo </option>
            <option value="Ensino Superior Incompleto"> Ensino Superior Incompleto </option>
            <option value="Ensino Superior Completo"> Ensino Superior Completo </option>
          </select>
        </div>
          <button onClick={this.props.goEtapa2}>Continuar</button>
      </div>
      </div>
    );
  }
  }
  
 