import React from "react";
import "./App.css";
import axios from "axios";
import styled from "styled-components";

class App extends React.Component {
  state = {
    inputPlaylist: "",
    playlist: [],
  };

 
  onChangeInputPlaylist = (event) => {
    this.setState({inputPlaylist: event.target.value });
  };
 

  createPlaylist = () => {
  const body = { 
    name: ''
  }
    const createPlaylist = axios.post(
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
      body,
      {
        headers: {
          Authorization: "giovanna-magalhaes-ailton",
        },
      }
    );
    createPlaylist
      .then((response) => {
        console.log(response);
        this.getAllPlaylists();
        alert("Deu certo!");
      })
      .catch((error) => {
        console.log(error);
        alert("Deu erro!");
      });
     };

  getAllPlaylists = () => {
    const body = {
      quantity: "",
      list: [],
      id: "",
      name: ""
    }

    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", body,
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

  // componentDidMount() {
  //   this.getAllUsers();
  // }

  // deleteUsers = (id) => {
  //   axios
  //     .delete(
  //       `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
  //       {
  //         headers: {
  //           Authorization: "giovanna-magalhaes-ailton",
  //         },
  //       }
  //     )
  //     .then((response) => {
  //       this.getAllUsers();
  //       console.log(response);
  //       alert("Deletou!");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       alert("ERRO!");
  //     });
  // };

  render() {
    return (
      <div>
        <header>
          <h1>
            LABEFY
          </h1>
          <hr />
        </header>
        <nav>
          <ul>
            <button onClick={this.onClickPrincipal}>
              {" "}
              Criar Playlist{" "}
            </button>
            <button onClick={this.onClickLista}>
              {" "}
              Lista de Usuários{" "}
            </button>
          </ul>
        </nav>
        <main>
          {this.state.page === "Cadastro" && (
            <div>
              <h2>CADASTRO DE USUÁRIOS</h2>
              <label htmlFor="name">Nome:</label>
              <input
                id="nome"
                value={this.state.inputName}
                onChange={this.onChangeInputName}
              />
              <label htmlFor="email">E-mail:</label>
              <input
                id="email"
                value={this.state.inputEmail}
                onChange={this.onChangeInputEmail}
              />
              <button onClick={this.createUsers}>
                Criar Usuário
              </button>
            </div>
          )}
          {this.state.page === "Lista" && (
            <div>
              <h2> LISTA DE USUÁRIOS CADASTRADOS </h2>
              {this.state.usuarios.map((item) => {
                return (
                  <p key={item.id}>
                    Nome: {item.name}
                    <button onClick={() => this.deleteUsers(item.id)}>
                      Deletar Usuário
                    </button>
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
