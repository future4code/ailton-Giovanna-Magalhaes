import React, { useEffect, useState } from "react";
import axios from "axios";
import PokeCard from "./Components/PokeCard";
import styled from "styled-components";

const DivSelect = styled.select `
margin-left: 50px;
margin-top: 15px;
height: 5vh;
width: 15vw;
`
export default function App() { 
  const [pokeList, setPokelist] = useState([])
  const [pokeName, setPokename] = useState("")

  useEffect(() => {
    catchPokelist()
  }, []);

  const mudaPokeName = event => {
    setPokename(event.target.value)
  };

  const catchPokelist = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151")
    .then(response => {
      setPokelist(response.data.results)
      console.log(response.data.results)
    })
    .catch(error => {
      console.log(error)
    })
  }
 
    return (
      <div>
        <DivSelect onChange={mudaPokeName}>
          <option value={""}>Nenhum</option>
          {pokeList.map(pokemon => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </DivSelect>
      {pokeName && <PokeCard pokemon={pokeName} />}
      </div>
    );
  }
