<<<<<<< HEAD
=======
import logo from "./logo.svg";
>>>>>>> master
import "./App.css";
import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
<<<<<<< HEAD
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
=======

const ComponenteFuncional = () => {
  const [id, setId]=useState('')
  const [age, setAge]=useState(Number(''))
  const [name, setName]=useState('')
  const [photo, setPhoto]=useState('')
  const [bio, setBio]=useState('')

 const GetProfiles = () => {
    const url =
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:giovanna/person";

    axios.get(url).then((response) => {
      console.log(response);
      setId(response.data.id)
    }).catch(error => console.log(error))
    
  };
  
  const ChoosePerson = () => {
    const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:giovanna/choose-person'
    const body = {
      id: setId,
      choice: true
    } 
    axios.post(url, body)
  }


  
  return (
    <div>
      <button onClick={() => GetProfiles(id, age, name, photo, bio)}>Adicionar</button>
    </div>
  );
}

export default ComponenteFuncional;
>>>>>>> master
