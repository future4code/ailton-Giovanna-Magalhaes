import logo from "./logo.svg";
import "./App.css";
import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";

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