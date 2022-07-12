import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
  }
`;

const Header = styled.header`
  background-color: white;
  height: 10vh;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px dotted #a0ff0b;
  h1 {
    font-family: "Tahoma";
    color: #a0ff0b;
    margin-left: 15px;
    padding-top: 5px;
    font-size: 40px;
  }
`;
const ImagemTitulo = styled.img`
  height: 45px;
  width: 45px;
  left: 132px;
  position: fixed;
`;
const BotaoVoltar = styled.button`
  width: 65px;
  height: 21px;
  margin-left: 5px;
  border-radius: 5px;
  border: 1px solid #a0ff0b;
  background-color: #a0ff0b;
  margin-right: 15px;
  box-shadow: 2px 5px 5px #b6d7a8;
`;
const BotaoDetalhes = styled.button`
width: 15vw;
  height: 21px;
  border-radius: 5px;
  border: 1px solid #a0ff0b;
  background-color: #a0ff0b;
  margin-right: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Main = styled.main`
  background-color: white;
  height: 87vh;
  width: 100vw;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const Footer = styled.footer`
  background-color: white;
  height: 3vh;
  width: 100vw;
  border-top: 1px dotted #a0ff0b;
  font-size: smaller;
  font-family: "Tahoma";
  color: #ccff66;
  display: flex;
  align-items: flex-end;
  justify-content: end;
  padding-right: 8px;
`;

export const AdminHomePage = () => {
    const navigate = useNavigate()
const CreateTrip = () => {
    navigate("/admin/trips/create")
}
const Detalhes = () => { 
  navigate("/admin/trips/:id")
}
const GoBack = () => {
  navigate(-1);
};
  return (
    <div>
      <GlobalStyle></GlobalStyle>
      <Header>
        <h1>LabeX</h1>{" "}
        <ImagemTitulo src="https://prints.ultracoloringpages.com/9803d589a11001692f891496aafe0d4f.png"></ImagemTitulo>
        <BotaoVoltar onClick={GoBack}> Voltar </BotaoVoltar>
      </Header>
      <Main>
        <BotaoDetalhes onClick={CreateTrip}>Criar nova viagem</BotaoDetalhes>
        <BotaoDetalhes onClick={Detalhes}>Detalhes</BotaoDetalhes>
      </Main>
      <Footer>site por: Giovanna Magalhães</Footer>
    </div>
  );
}
export default AdminHomePage;