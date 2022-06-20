import React from 'react';
import styled from 'styled-components'

const PrimeiraMudanca = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`
const SegundaMudanca = styled.img ` 
    width: 70px;
    margin-right: 10px;
    border-radius: 50%; 
    `
    const TerceiraMudanca = styled.h4 `
    margin-bottom: 15px;

    `
const UltimaMudanca = styled.div `
display: flex;
    flex-direction: column;
    justify-items: flex-start;
`

function CardGrande(props) {
    return (
        <PrimeiraMudanca className="bigcard-container">
            <SegundaMudanca src={ props.imagem } />
            <UltimaMudanca>
                <TerceiraMudanca>{ props.nome }</TerceiraMudanca>
                <p>{ props.descricao }</p>
            </UltimaMudanca>
        </PrimeiraMudanca>
    )
}

export default CardGrande;
