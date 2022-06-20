import React, {Component} from 'react';

export default class Etapa3 extends Component {
    render () {
      return (
      <div>
         <div className='Etapa3'>
        <div>
          <h2>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>
          <h3>7. Por que você não terminou um curso de gradução?</h3>
          <input placeholder={"Insira o motivo aqui!"}/>
          <h3>8. Você fez algum curso complementar?</h3>
          <select id="Curso Complementar" nome="Curso Complementar">
            <option value="Não Fiz"> Não Fiz </option>
            <option value="Sim"> Sim </option>
          </select>
          <input placeholder={"Se sim, indique qual"}/>
        </div>
        <button onClick={this.props.goFinal}>Continuar</button>
      </div>
      </div>

    );
  }
  }
  