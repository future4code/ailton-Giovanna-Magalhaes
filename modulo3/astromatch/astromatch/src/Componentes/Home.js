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

const TextoBio = styled.p`
  padding-left: 10px;
  font-size: small;
`;
const CardHome = styled.div`
  border: 1px solid #004962;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  width: 400px;
  height: 75vh;
`;
const Main = styled.div`
  width: 100vw;
  height: 80vh;
  background-color: #ead1dc;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    height: 280px;
    width: 230px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    border: 1px solid #d5a6bd;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  }
`;
const InfoUsuario = styled.p`
  font-size: large;
`;
const AreaLikes = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    height: 40px;
    width: 40px;
    border-radius: 30px;
    border: 1px solid black;
    font-size: larger;
    margin-right: 4px;
    align-items: center;
    justify-content: space-around;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
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

export default function ComponenteFuncional(props) {
  const [profile, setProfile] = useState("");
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [photo, setPhoto] = useState("");
  const [bio, setBio] = useState("");

  const GetProfileToChoose = () => {
    const url =
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person";
    const key = "giovanna";

    axios
      .get(url, key)
      .then((response) => {
        console.log(response);
        if (response.data.profile) {
          setProfile(response.data.profile);
        } else {
          alert("acabaram os perfis disponíveis");
          Clear()
        }
      })
      .catch((error) => console.log(error.response));
  };

  useEffect(() => {
    GetProfileToChoose();
  }, []);

  const Clear = () => {
    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/clear"
    const key = 'giovanna'
    axios.put(url, {
        headers: 'Content-Type: application/json'
    }, key).then((response) => {

        console.log(response)
        alert("Deu certo!")
    }).catch((error) => console.log(error.response))
  }
  const ChoosePerson = (idProfile) => {
    console.log(idProfile);
    const url =
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/choose-person";

    const key = "giovanna";

    const body = {
      id: idProfile,
      choice: true,
    };
    axios
      .post(
        url,
        body,
        {
          headers: "Content-Type: application/json",
        },
        key
      )
      .then((response) => {
        if (response.data.isMatch) {
          alert("Deu Match!");
        }
        GetProfileToChoose();
      })
      .catch((error) => {
        // console.log(error.response);
        alert("Tente Novamente!");
      });
  };

  return (
    <div>
      <GlobalStyle></GlobalStyle>
      <Header>
        <DivHeader>
          <h2>astro</h2>
          <h3>match</h3>
          <h5>★</h5>
        </DivHeader>
        <button onClick={() => props.setTela("Matches")}> Matches </button>
      </Header>

      <Main>
        <CardHome>
          <img src={profile.photo} />
          <InfoUsuario>
            <b>{profile.name}</b>, {profile.age}
          </InfoUsuario>
          <TextoBio>{profile.bio}</TextoBio>
          <AreaLikes>
            <button onClick={() => GetProfileToChoose()}> x </button>
            <button onClick={() => ChoosePerson(profile.id)}> ♥ </button>
          </AreaLikes>
        </CardHome>
      </Main>
      <Footer></Footer>
    </div>
  );
}
