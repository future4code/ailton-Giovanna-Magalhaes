import logo from "./logo.svg";
import "./App.css";
import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";

const Header = styled.div`
  background-color: #bcbcbc;
  height: 100vh;
  width: 100vw;
`;

const ComponenteFuncional = () => {
  const [id, setId] = useState("");
  const [age, setAge] = useState(Number(""));
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [bio, setBio] = useState("");

  const GetProfileToChoose = () => {
    const url =
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:giovanna/person";

    axios
      .get(url)
      .then((response) => {
        console.log(response);
        setId(response.data.id);
        setAge(response.data.age);
        setName(response.data.name);
        setPhoto(response.data.photo);
        setBio(response.data.bio);
      })
      .catch((error) => console.log(error.response));
  };

  const ChoosePerson = (idProfile) => {
    const url =
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:giovanna/choose-person";
    const body = {
      id: idProfile,
      choice: true,
    };
    axios
      .post(url, body, {
        headers: "Content-Type: application/json",
      })
      .then((response) => {
        alert("Deu Match!");
      })
      .catch((error) => {
        console.log(error.response);
        alert("Tente Novamente!");
      });
  };

  return (
    <div>
      <div>
        <header></header>
      </div>
      <Header>
        <div>
          <button onClick={() => GetProfileToChoose()}>
            {" "}
            Escolher perfil{" "}
          </button>
          <button onClick={() => ChoosePerson(id)}> Positivo </button>
        </div>
      </Header>
      <footer></footer>
    </div>
  );
};

export default ComponenteFuncional;
