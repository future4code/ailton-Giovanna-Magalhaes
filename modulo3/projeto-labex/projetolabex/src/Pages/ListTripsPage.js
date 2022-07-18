import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { useRequestData } from "../UseRequestData/useRequestData.js";
import { BASE_URL } from "../UseRequestData/BASE_URL.js";

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
const BotaoInscricao = styled.button`
  width: 10vw;
  height: 21px;
  margin-left: 5px;
  border-radius: 5px;
  border: 1px solid #a0ff0b;
  background-color: #a0ff0b;
  margin-right: 15px;
`;

const Main = styled.main`
  background-color: white;
  height: 87vh;
  width: 100vw;
  display: inline-flex;
  align-items: center;
`;
const CardTripFilha = styled.div`
  height: 17vh;
  width: 38vw;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  border: 1px solid #a0ff0b;
  border-radius: 8px;
  padding: 3px;
  margin-top: 5px;
  margin-left: 8px;
  font-family: "Tahoma";
  font-size: small;
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

export const ListTripsPage = () => {
  const [data] = useRequestData(`${BASE_URL}/trips`);
  const tripList = data.map((trip) => {
    return (
      <CardTripFilha key={trip.name}>
        <p>
          <b>Nome:</b> {trip.name}
        </p>
        <p>
          <b>Descrição:</b> {trip.description}
        </p>
        <p>
          <b>Planeta:</b> {trip.planet}
        </p>
        <p>
          <b>Duração:</b> {trip.durationInDays} dias
        </p>
        <p>
          <b>Data:</b> {trip.date}
        </p>
      </CardTripFilha>
    );
  });

  const navigate = useNavigate();
  const ApplicationPag = () => {
    navigate("/trips/application");
  };
  const GoBack = () => {
    navigate(-1);
  };
  return (
    <div>
      {console.log(data)}
      <GlobalStyle></GlobalStyle>
      <Header>
        <h1>LabeX</h1>{" "}
        <ImagemTitulo src="https://prints.ultracoloringpages.com/9803d589a11001692f891496aafe0d4f.png"></ImagemTitulo>
        <BotaoVoltar onClick={GoBack}> Voltar </BotaoVoltar>
      </Header>
      <Main>
        <div>
          <BotaoInscricao onClick={ApplicationPag}>
            {" "}
            Inscrever-se{" "}
          </BotaoInscricao>
          <div>{tripList}</div>
        </div>
      </Main>
      <Footer>site por: Giovanna Magalhães</Footer>
    </div>
  );
};
export default ListTripsPage;
