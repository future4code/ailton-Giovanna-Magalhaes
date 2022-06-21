import React from 'react';
import styled from 'styled-components';

const CaixaMensagem = styled.div`
  display: flex;
  justify-self: flex-end;
`

const InputDoTexto = styled.input`
  flex: 1;
  border: 1px solid grey;
  display: flex;
  `

const InputDoUsuario = styled.input`
  width: 100px;
  border: 1px solid grey;
`

export class MeuComponente extends React.Component {

    state = { 
        usuario: '',
        texto: ''
    }

    enviarMensagem = () => {
    }
    
    onChangeUsuario = (evento) => {
        this.setState({usuario: evento.target.value})
    }

    onChangeTexto = (evento) => {
        this.setState({texto: evento.target.value})
    }

  render() {
    return (
      <CaixaMensagem>
        <InputDoUsuario type="texto" placeholder={'Usuário'} value={this.state.usuario} onChange={this.onChangeUsuario} />
        <InputDoTexto type="texto" placeholder={'Mensagem'} value={this.state.texto} onChange={this.onChangeTexto} />
        <button onClick={this.enviarMensagem}>Enviar</button>
      </CaixaMensagem>
    );
  }}
  
