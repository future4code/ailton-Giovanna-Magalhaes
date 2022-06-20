import React, {Component} from 'react';

export default class Etapa2 extends Component {
    render () {
      return (
      <div>
        <div>
         <div className='Etapa2'>
        <div>
          <h2>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>
          <h3>5. Qual o curso?</h3>
          <input placeholder = {"Curso"} />
          <h3>6. Qual a unidade de ensino?</h3>
          <input placeholder={"Unidade de Ensino"} />
        </div>
        <button onClick={this.props.goEtapa3}>Continuar</button>
      </div>
      </div>
      </div>
    );
  }
  }
  