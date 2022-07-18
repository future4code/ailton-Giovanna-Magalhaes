import React from "react";
import axios from "axios";
import {useState, useEffect} from "react";
import styled from "styled-components";

const ContainerPrincipal = styled.div`
border: 1px solid black;
display: grid;
align-content: center;
justify-items: center;
grid-row: auto;
margin-top: 12px;
width: 45vw;
height: 50vh;
margin-left: 260px;
`
export default function PokeCard(props) {

    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
        catchPokemon(props.pokemon)
    }, [props.pokemon])
        
        const catchPokemon = (pokeName) => { 
            console.log(pokeName)
            axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
            .then(response => {
                setPokemon(response.data)
            }).catch(error => {
                console.log(error)
            })
        }
    
    return (
        <div>
            <ContainerPrincipal>
            <p><b>{pokemon.name}</b></p>
            <p>{pokemon.weight} Kg</p>
            {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
            {pokemon.sprites && (
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                )}

            </ContainerPrincipal>
          </div>
        )
    }
    