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

const TituloCard = styled.div``;
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

const DivHeader = styled.div`
  font-size: 17px;
  margin-left: 3px;
  display: inline;
  align-items: center;
  justify-items: center;
  position: fixed;
  top: 6vh;
  h2 {
    color: #004962;
    display: inline;
  }
  h3 {
    color: #76a5af;
    display: inline;
  }
  h5 {
    color: #004962;
    display: inline;
    margin-left: 6px;
    margin-right: 130px;
  }
`;

const TextoBio = styled.p`
  padding-left: 12px;
  font-size: small;
`;
const CardHome = styled.div`
  border: 1px solid #004962;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3px;
  padding-top: 6px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  width: 350px;
  height: 90vh;
  img {
    margin-top: 50px;
    height: 280px;
    width: 230px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    border: 1px solid #073763;
    
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
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
const InfoUsuario = styled.p`
  font-size: large;
`;
const AreaLikes = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const BotaoCurtir = styled.button`
  height: 40px;
  width: 40px;
  border-radius: 30px;
  border: 1px solid green;
  font-size: larger;
  margin-right: 4px;
  align-items: center;
  justify-content: space-around;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  color: green;
  margin-top: 15px;
`;
const BotaoPassar = styled.button`
  height: 40px;
  width: 40px;
  border-radius: 30px;
  border: 1px solid #e8250c;
  font-size: larger;
  margin-right: 4px;
  align-items: center;
  justify-content: space-around;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  color: #e8250c;
  margin-top: 15px;
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
          props.Clear();
        }
      })
      .catch((error) => console.log(error.response));
  };

  useEffect(() => {
    GetProfileToChoose();
  }, []);

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
        <TituloCard></TituloCard>
      </Header>

      <Main>
        <CardHome>
          <DivHeader>
            <h2>astro</h2>
            <h3>match</h3>
            <h5>★</h5>
            <BotaoCard onClick={() => props.setTela("Matches")}>
              Matches
            </BotaoCard>
          </DivHeader>
          <img src={profile.photo} />
          <InfoUsuario>
            <b>{profile.name}</b>, {profile.age}
          </InfoUsuario>
          <TextoBio>{profile.bio}</TextoBio>
          <AreaLikes>
            <BotaoPassar onClick={() => GetProfileToChoose()}> x </BotaoPassar>
            <BotaoCurtir onClick={() => ChoosePerson(profile.id)}>
              {" "}
              ♥{" "}
            </BotaoCurtir>
          </AreaLikes>
        </CardHome>
      </Main>
      <Footer></Footer>
    </div>
  );
}
