import React from "react";
import "./App.css";
import axios from "axios";
import styled from "styled-components";

const FundoDeTela = styled.div`
  background-color: beige;
  height: 100vh;
`;

const Inputs = styled.input`
  margin-left: 5px;
  border: 1px solid #c27ba0;
  display: block;
  margin: 0 auto;
`;
const Labels = styled.label`
  margin-left: 5px;
  display: block;
  font-size: small;
  padding: 2px 0 2px 0;
  text-align: center;
  font-style: italic;
`;
const BotaoDeletar = styled.button`
  display: inline-block;
  margin: 5px 0 5px 10px;
  border: 1px solid purple;
`;
const Titulo = styled.h2`
  text-align: center;
  color: #c27ba0;
  margin-left: 15px;
  font-style: italic;
  
`;
const TituloPrincipal = styled.h1`
  text-align: center;
  color: #a64d79;
  background-color: beige;
`;
const VariacaoDePagina = styled.button`
  border: 1px solid purple;
  margin: 2px;
  display: inline-block;
  text-align: center;
`;
const BotaoCriarUsuario = styled.button`
  display: block;
  margin: 0 auto;
  border: 1px solid purple;
  margin-top: 10px;
`;

const BordaNome = styled.p`
  border: 1px dashed #c27ba0;
  margin-left: 2px;
`;

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

    this.setState({ inputName: "" });
    this.setState({ inputEmail: "" });
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
      <FundoDeTela>
        <header>
          <TituloPrincipal>
            Execício de Integração Básica de APIs
          </TituloPrincipal>
          <hr />
        </header>
        <nav>
          <ul>
            <VariacaoDePagina onClick={this.onClickPrincipal}>
              {" "}
              Cadastrar Usuários{" "}
            </VariacaoDePagina>
            <VariacaoDePagina onClick={this.onClickLista}>
              {" "}
              Lista de Usuários{" "}
            </VariacaoDePagina>
          </ul>
        </nav>
        <main>
          {this.state.page === "Cadastro" && (
            <div>
              <hr />
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
              <BotaoCriarUsuario onClick={this.createUsers}>
                Criar Usuário
              </BotaoCriarUsuario>
            </div>
          )}
          {this.state.page === "Lista" && (
            <div>
              <hr />
              <Titulo> LISTA DE USUÁRIOS CADASTRADOS </Titulo>
              {this.state.usuarios.map((item) => {
                return (
                  <BordaNome key={item.id}>
                    Nome: {item.name}
                    <BotaoDeletar onClick={() => this.deleteUsers(item.id)}>
                      Deletar Usuário
                    </BotaoDeletar>
                  </BordaNome>
                );
              })}
              <div></div>
            </div>
          )}
        </main>
        <footer></footer>
      </FundoDeTela>
    );
  }
}

export default App;
