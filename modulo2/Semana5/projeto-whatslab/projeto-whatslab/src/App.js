import React from "react";
import styled from "styled-components";
import Logo from "./1200px-Google_Chat_icon_(2020).svg.png";
import {MeuComponente} from "./Components/MeuComponente";

//Tela Principal
const TelaPrincipal = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  max-width: 600px;
  height: 100vh;
  flex: 1;
  background-color: #ddfada;
  align-content: space-between;
`;

// header
const Header = styled.div`
  display: flex;
  border-bottom: 1px solid black;
  flex-direction: column;
  justify-content: flex-end;
  padding: 10px;
  background-color: #abd7a8;
`;

const ContainerTexto = styled.div `
display: flex;
flex: 1;
`
//Logo
const LogoWhats = styled.p`
  font-size: 35px;
  margin: 1px;
  margin-left: 190px;
  font-family: "A little sunshine", Courier, cursive;
  letter-spacing: 3px;
`;
const LogoImg = styled.img`
  width: 30px;
  height: 30px;
  display: inline;
  margin-left: 10px;
`;

class App extends React.Component {
  
  state = {
    mensagens: []
  }
  

  render() {
    return (
      <TelaPrincipal>
        <Header>
          <LogoWhats>
            <b>WhatsLab</b>
            <LogoImg src={Logo} alt="Logo"/>
          </LogoWhats>
        </Header>
        <ContainerTexto> {
        this.state.mensagens.map(mensagem => {return <div><p><b>{mensagem.usuario}</b></p><p>{': ' + mensagem.texto}</p></div>})
  }
        </ContainerTexto>
        <MeuComponente/>
      </TelaPrincipal>
    );
  }
}

export default App;
