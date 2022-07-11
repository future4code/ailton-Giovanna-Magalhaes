import { BASE_URL } from "../constants";
import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";

const Header = styled.header`
  background-color: white;
  height: 10vh;
  width: 100vw;
  display: flex;
  justify-content: center;
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
  height: 65px;
  width: 65px;
`;
const Main = styled.main`
  background-color: white;
  height: 87vh;
  width: 100vw;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  width: 140px;
  height: 21px;
  margin-left: 5px;
  border-radius: 5px;
  border: 1px solid #a0ff0b;
  background-color: #a0ff0b;
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

export default function HomePage() {
  return (
    <div>
      <Header>
        <h1>LabeX</h1>{" "}
        <ImagemTitulo src="https://prints.ultracoloringpages.com/9803d589a11001692f891496aafe0d4f.png"></ImagemTitulo>
      </Header>
      <Main>
        <Button>Lista de Viagens</Button>
        <Button>Área Administrativa</Button>
      </Main>
      <Footer>site por: Giovanna Magalhães</Footer>
    </div>
  );
}
