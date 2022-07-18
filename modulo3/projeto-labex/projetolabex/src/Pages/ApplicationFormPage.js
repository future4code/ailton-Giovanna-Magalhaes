import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { BASE_URL } from "../UseRequestData/BASE_URL";
import { useRequestData } from "../UseRequestData/useRequestData";
import { useForm } from "../UseRequestData/useForm";

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
const BotaoEnviar = styled.button`
  height: 21px;
  border-radius: 5px;
  border: 1px solid #a0ff0b;
  background-color: #a0ff0b;
`;
const Main = styled.main`
  background-color: white;
  height: 87vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ExibicaoInputs = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 20px;
    color: #38761d;
  }
`;
const Inputs = styled.input`
  width: 30vw;
  padding-top: 3px;
  margin-bottom: 4px;
  border-radius: 5px;
  border: 1px solid #38761d;
`;
const Select = styled.select`
  width: 30vw;
  padding-top: 3px;
  margin-bottom: 4px;
  border-radius: 5px;
  border: 1px solid #38761d;
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

export const ApplicationFormPage = () => {
  const [trip, setTrip] = useState("");
  const [data] = useRequestData(`${BASE_URL}/trips`);
  const [form, onChange, cleanFields] = useForm({
    nome: "",
    idade: "",
    texto: "",
    profissao: "",
    country: "",
  });
  const body = {
    name: form.nome,
    age: form.idade,
    applicationText: form.texto,
    profession: form.profissao,
    country: form.country,
  };
  const optionsTrips = data.map((trip) => {
    return (
      <option value={trip.id} key={trip.id}>
        {trip.name}
      </option>
    );
  });

  const onChangeTrips = (event) => {
    setTrip(event.target.value);
  };
  const navigate = useNavigate();
  const GoBack = () => {
    navigate(-1);
  };
  const onSubmitTrip = () => {
    axios
      .post(`${BASE_URL}/trips/${trip}/apply`, body)
      .then((response) => {
        alert("Deu Certo!", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <GlobalStyle></GlobalStyle>
      <Header>
        <h1>LabeX</h1>{" "}
        <ImagemTitulo src="https://prints.ultracoloringpages.com/9803d589a11001692f891496aafe0d4f.png"></ImagemTitulo>
        <BotaoVoltar onClick={GoBack}> Voltar </BotaoVoltar>
      </Header>
      <Main>
        <ExibicaoInputs>
          <h2>Inscreva-se para uma viagem!</h2>
          <Select onChange={onChangeTrips}>
            <option value="">Escolha uma viagem</option>
            {optionsTrips}
          </Select>
          <Inputs
            placeholder="Nome"
            name={"nome"}
            onChange={onChange}
            value={form.nome}
          />
          <Inputs
            placeholder="Idade"
            name={"idade"}
            onChange={onChange}
            value={form.idade}
            type="number"
          />
          <Inputs
            placeholder="Texto"
            name={"texto"}
            onChange={onChange}
            value={form.texto}
          />
          <Inputs
            placeholder="Profissão"
            name={"profissao"}
            onChange={onChange}
            value={form.profissao}
          />
          <Inputs
            placeholder="País"
            name={"country"}
            onChange={onChange}
            value={form.country}
          />
          <BotaoEnviar onClick={onSubmitTrip}>Enviar</BotaoEnviar>
        </ExibicaoInputs>
      </Main>
      <Footer>site por: Giovanna Magalhães</Footer>
    </div>
  );
};
export default ApplicationFormPage;
