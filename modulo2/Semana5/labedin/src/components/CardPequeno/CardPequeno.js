import React from 'react';
import styled from 'styled-components';

const MudancaImagem = styled.img `
 width: 50px;
    margin-right: 10px;
    border-radius: 50%;
`
const MudancaCard = styled.div `
display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 10px 10px;
    margin-bottom: 10px;
    height: 80px;
`

function CardPequeno(props) {
    return (
        <MudancaCard className="smallcard-container">
            <MudancaImagem src={props.imagem} />
            <div>
                <b>{props.nome}</b> <text>{props.descricao}</text>
            </div>
        </MudancaCard>
    )
}

export default CardPequeno;