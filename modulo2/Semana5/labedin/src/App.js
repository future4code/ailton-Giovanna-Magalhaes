import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import paisagem from './components/Imagem/Foto1.jpeg';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem= {paisagem} 
          nome= {'Giovanna Magalhães'} 
          descricao={"Oi, eu sou a Giovanna. Sou aluna do curso intensivo Full-Stack da Labenu. Não vejo a hora de poder me formar e executar tudo que estou aprendedendo por aqui!"}
        />
        
        <ImagemButton 
          imagem={"https://i.pinimg.com/564x/09/0a/ea/090aea0be7fa8331086ce7023350ef0a.jpg"}
          texto={"Ver mais"}
        />
        
        <CardPequeno
        imagem = {"https://cdn-icons-png.flaticon.com/512/54/54215.png"}
        nome = {"Email:"}
        descricao={"giovannamglhs06@gmail.com"}
        />

        <CardPequeno 
        imagem = {"https://img2.gratispng.com/20180707/zzs/kisspng-computer-icons-symbol-address-clip-art-address-logo-5b41563a0b7502.2573506715310085700469.jpg"}
        nome = {"Endereço:"}
        descricao = {"Rua Le Parc, 100 - Recife, PE"}
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={"https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png"}
          nome={"Labenu"} 
          descricao= {"Estudante - Curso Full-Stack Labenu (Duração: 6 meses)"}
        />
        
        <CardGrande 
          imagem= {"https://aeromagazine.uol.com.br/media/versions/nasa_meatball_1_free_big.jpg"}
          nome = {"NASA"}
          descricao= {"Apontando defeitos."}
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem={"https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"}
          texto={"Facebook"}
        />        

        <ImagemButton 
          imagem={"https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"}
          texto={"Twitter"} 
        />        
      </div>
    </div>
  );
}

export default App;
