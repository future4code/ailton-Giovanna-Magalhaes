import React from 'react';
import styled from 'styled-components';

const MudancaBotao = styled.div `
display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 50px;
    width: 200px;
    padding: 15px 30px;
    margin: 10px auto;
`
const MudancaBotaoImagem = styled.img `
    width: 30px;
    margin-right: 10px;
`

function ImagemButton(props) {
    return (
        <MudancaBotao className="image-button-container">
            <MudancaBotaoImagem src={props.imagem}/>
            <p>{props.texto}</p>
        </MudancaBotao>

    )
}

export default ImagemButton;