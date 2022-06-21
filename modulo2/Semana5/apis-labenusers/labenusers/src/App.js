import React from "react";
import "./App.css";
import axios from "axios";
import styled from "styled-components";

const Inputs = styled.input`
  margin-left: 5px;
`;
const Labels = styled.label`
  margin-left: 2px;
  display: block;
  font-size: medium;
`
const BotaoDeletar = styled.button `
margin-left: 4px;
`
const Titulo = styled.h3`
text-align: left;
color: #c27ba0;
margin-left: 15px;
`
const TituloPrincipal = styled.h2 `
text-align: center;
color: #a64d79;
`
const VariacaoDePagina = styled.button `
margin-left: 5px;
border: 1px solid purple;

`

class App extends React.Component {
  state = {
    inputName: "",
    inputEmail: "",
    usuarios: [],
    page: "Cadastro",
  };

  onClickPrincipal = () => {
    this.setState({
      page: "Cadastro",
    });
  };
  onClickLista = () => {
    this.setState({
      page: "Lista",
    });
  };
  onChangeInputName = (event) => {
    this.setState({ inputName: event.target.value });
  };
  onChangeInputEmail = (event) => {
    this.setState({ inputEmail: event.target.value });
  };

  createUsers = () => {
    const body = {
      name: this.state.inputName,
      email: this.state.inputEmail,
    };

    const createUser = axios.post(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
      body,
      {
        headers: {
          Authorization: "giovanna-magalhaes-ailton",
        },
      }
    );
    createUser
      .then((response) => {
        console.log(response);
        this.getAllUsers();
        alert("Deu certo!");
      })
      .catch((error) => {
        console.log(error);
        alert("Deu erro!");
      });

      this.setState({inputName:""})
      this.setState({inputEmail:""})
  };

  getAllUsers = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "giovanna-magalhaes-ailton",
          },
        }
      )
      .then((response) => {
        console.log(response);
        const arrayUsuarios = response.data.map((item) => {
          return item;
        });
        this.setState({
          usuarios: arrayUsuarios,
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  componentDidMount() {
    this.getAllUsers();
  }

  deleteUsers = (id) => {
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
        {
          headers: {
            Authorization: "giovanna-magalhaes-ailton",
          },
        }
      )
      .then((response) => {
        this.getAllUsers();
        console.log(response);
        alert("Deletou!");
      })
      .catch((error) => {
        console.log(error);
        alert("ERRO!");
      });
  };

  render() {
    return (
      <div>
        <header>
          <TituloPrincipal>Execício de Integração Básica de APIs</TituloPrincipal>
          <hr />
          <nav>
            <ul>
              <VariacaoDePagina onClick={this.onClickPrincipal}> Cadastrar Usuários </VariacaoDePagina>
                <VariacaoDePagina onClick={this.onClickLista}> Lista de Usuários </VariacaoDePagina>
            </ul>
          </nav>
        </header>
        <main>
          {this.state.page === "Cadastro" && (
            <div>
              <hr/>
              <Titulo>CADASTRO DE USUÁRIOS</Titulo>
              <Labels htmlFor="name">Nome:</Labels>
              <Inputs
                id="nome"
                value={this.state.inputName}
                onChange={this.onChangeInputName}
              />
              <Labels htmlFor="email">E-mail:</Labels>
              <Inputs
                id="email"
                value={this.state.inputEmail}
                onChange={this.onChangeInputEmail}
              />
              <button onClick={this.createUsers}>Criar Usuário</button>
            </div>
          )}
          {this.state.page === "Lista" && (
            <div>
              <hr />
              <Titulo> LISTA DE USUÁRIOS CADASTRADOS </Titulo>
              {this.state.usuarios.map((item) => {
                return (
                  <p key={item.id}>
                    Nome: {item.name}
                    <BotaoDeletar onClick={() => this.deleteUsers(item.id)}>Deletar Usuário</BotaoDeletar>
                  </p>
                );
              })}
            <div></div>
          </div>
         )} 
        </main>
        <footer></footer>
      </div>
    );
  }
}

export default App;
