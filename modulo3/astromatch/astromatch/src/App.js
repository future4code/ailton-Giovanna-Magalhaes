import "./App.css";
import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import Home from "./Componentes/Home"
import Matches from "./Componentes/Matches";


export default function ComponenteFuncional() {
  const [tela, setTela] = useState("Home")

 const trocatela = () => {
switch (tela) {
  case "Home":
    return <Home setTela={setTela}></Home>;
    case "Matches":
      return <Matches setTela={setTela}></Matches>;
}
 }

  return (
    <div>
      {trocatela()}
    </div>
  );
}
