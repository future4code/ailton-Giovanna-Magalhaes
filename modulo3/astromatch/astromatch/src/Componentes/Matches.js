import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100%;
  }
`;
const Header = styled.header`
  width: 100vw;
  height: 1vh;
  background-color: #999999;
  letter-spacing: 2px;
  font-family: "tahoma";
  display: flex;
  align-items: center;
  font-size: 20px;
`;

const BotaoCard = styled.button`
  display: inline-flex;
  align-items: flex-start;
  justify-items: space-between;
  border-radius: 6px;
  border: 1px solid #004962;
  border-style: outset;
  font: 12px tahoma, sans-serif;
  text-shadow: white;
  background-color: #004962;
  color: white;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
`;
const CardHome = styled.div`
  border: 1px solid #004962;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3px;
  padding-top: 2px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  width: 350px;
  height: 90vh;
`;
const DivHeader = styled.div`
  font-size: 17px;
  margin-left: 1px;
  display: inline;
  align-items: center;
  position: fixed;
  top:6vh;
  h2 {
    color: #004962;
    display: inline;
  }
  h3 {
    color:#76a5af;
    display: inline;
  }
  h5 {
    color: #004962;
    display: inline;
    margin-left: 6px;
    margin-right: 100px;
  }
`;
const Main = styled.div`
  width: 100vw;
  height: 98vh;
  background-color: #eeeeee;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const TituloRenderizado = styled.h4`
  display: flex;
  align-content: center;
  justify-content: start;
  color: #004962;

` 
const DivRenderizada = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: start;
  img {
    height: 30px;
    width: 30px;
    border-radius: 60px;
    border: 1px solid #004962;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    margin-left: 1px;
  }
  p {
    font-size: small;
    font-family: "Tahoma";
    display: inline;
    margin-left: 9px;

  }
`;

const Footer = styled.div`
  height: 1vh;
  width: 100vw;
  background-color: #999999;
  display: flex;
  align-items: flex-end;
  justify-content: end;
  font-size: small;
  font-family: "Tahoma";
`;

function Matches(props) {
  const [listaMatch, setListaMatch] = useState([]);

  useEffect(() => {
    GetAllMatches();
  }, [listaMatch]);

  const GetAllMatches = () => {
    const url =
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/matches";
    const key = "giovanna";

    axios
      .get(url, key)
      .then((response) => {
        setListaMatch(response.data.matches);
      })
      .catch((error) => console.log(error.response));
  };

  const novaListaMatch = listaMatch.map((info) => {
    return (
      <div key={info.id}>
        <img src={info.photo}></img>
        <p>
          <b>{info.name}</b>, {info.age}
        </p>
      </div>
    );
  });

  return (
    <div>
      <GlobalStyle></GlobalStyle>
      <Header>
      </Header>

      <Main>
        <CardHome>
          <DivHeader>
            <h2>astro</h2>
            <h3>match</h3>
            <h5>★</h5>
            <BotaoCard onClick={() => props.setTela("Home")}> 
              Home
            </BotaoCard>
            <BotaoCard onClick={props.Clear}>Limpar</BotaoCard>
            <TituloRenderizado>  seus matches: </TituloRenderizado>
          <DivRenderizada>{novaListaMatch}</DivRenderizada>
          </DivHeader>
        </CardHome>
      </Main>
      <Footer></Footer>
    </div>
  );
}

export default Matches;
