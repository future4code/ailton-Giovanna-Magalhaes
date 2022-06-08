import React from 'react'
import styled from 'styled-components'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0
  }

  onClickCurtida = () => {
    console.log('Curtiu!')

    this.setState ({curtido: !this.setState.curtido})

    if(this.state.numeroCurtidas !== 0) {
      this.setState ({numeroCurtidas: this.state.numeroCurtidas - 1})
    } else {
      this.setState ({numeroCurtidas: this.state.numeroCurtidas + 1})
    }
  
  }
   
  // "onClickCurtida" tá sendo invocada no return, na área que há interação com o usuário, la no postfooter;
// "numeroCurtidas" é utilizada no contador para identificar a quantidade de curtidas que a página recebeu.

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }
// Dá a liberdade ao usuário para poder comentar no post. 

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

// "numeroComentarios" mostra a quantidade de comentários que foi feito. 

  render() {
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }
// O "curtido" é utilizado aqui após o render, para especificar se a postagem foi curtida ou não.

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    return <PostContainer>
      <PostHeader>
        <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

{/* IconeComContador é a função, que têm as três propriedades: icone, onClickIcone e valorContador. Ele vem importado do arquivo
IconeComContador.js, como tá explicado no início desse arquivo Posts.js. E eles aparecem na tela do usuário, como o ícone
de curtida da página (em formato do coração) */}

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
      </PostFooter>
      {componenteComentario}
    </PostContainer>
  }
}

export default Post