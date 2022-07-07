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
    height: 100vh;
  }
`;
const Header = styled.header`
  width: 100vw;
  height: 13vh;
  background-color: #d5a6bd;
  letter-spacing: 2px;
  font-family: "tahoma";
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  button {
    margin-right: 8px;
    border-radius: 6px;
    border: 1px solid #004962;
    color: #004962;
  }
`;
const DivHeader = styled.div`
  h2 {
    color: #004962;
    display: inline;
    padding-left: 18px;
  }
  h3 {
    color: white;
    display: inline;
  }
  h5 {
    color: #004962;
    display: inline;
    margin-left: 3px;
  }
`;
const Main = styled.div`
  width: 100vw;
  height: 80vh;
  background-color: #ead1dc;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;
const TituloRenderizado = styled.h1`
  display: flex;
  align-content: center;
  justify-content: center;
  color: #004962;
`;
const DivRenderizada = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  img {
    height: 100px;
    width: 100px;
    border-radius: 60px;
    display: grid;
    border: 1px solid #d5a6bd;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    margin-left: 20px;
  }
  p {
    font-size: small;
    font-family: "Tahoma";
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Footer = styled.div`
  height: 7vh;
  width: 100vw;
  background-color: #d5a6bd;
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
  }, []);

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
      {/* {console.lo/(listaMatch)} */}
      <GlobalStyle></GlobalStyle>
      <Header>
        <DivHeader>
          <h2>astro</h2>
          <h3>match</h3>
          <h5>★</h5>
        </DivHeader>
        <button onClick={() => props.setTela("Home")}> Home </button>
      </Header>
      <Main>
        <div>
          <TituloRenderizado>LISTA DE MATCHES</TituloRenderizado>
          <DivRenderizada>{novaListaMatch}</DivRenderizada>
        </div>
      </Main>
      <Footer></Footer>
    </div>
  );
}

export default Matches;
