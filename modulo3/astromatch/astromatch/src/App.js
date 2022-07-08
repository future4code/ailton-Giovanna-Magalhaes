import "./App.css";
import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import Home from "./Componentes/Home"
import Matches from "./Componentes/Matches";


export default function ComponenteFuncional() {

  const Clear = () => {
    const url =
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/clear";
    const key = "giovanna";
    axios
      .put(
        url,
        {
          headers: "Content-Type: application/json",
        },
        key
      )
      .then((response) => {
        console.log(response);
        alert("Deu certo!");
      })
      .catch((error) => console.log(error.response));
  };

  const [tela, setTela] = useState("Home")

 const trocatela = () => {
switch (tela) {
  case "Home":
    return <Home Clear={Clear} setTela={setTela}></Home>;
    case "Matches":
      return <Matches Clear={Clear}setTela={setTela}></Matches>;
}
 }

  return (
    <div>
      {trocatela()}
    </div>
  );
}
