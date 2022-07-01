import React from "react";
import "./App.css";
import axios from "axios";
import styled from "styled-components";

const TituloPrincipal = styled.h1`
  display: flex;
  justify-content: center;
  color: greenyellow;
  background-color: green;
`;

class App extends React.Component {
  state = {
    inputPlaylist: "",
    playlists: [],
    page: "Principal",
  };

  onClickPrincipal = () => {
    this.setState({
      page: "Principal",
    });
  };

  onClickListaPlaylist = () => {
    this.setState({
      page: "Lista de Playlists",
    });
  };

  onChangeInputPlaylist = (event) => {
    this.setState({ inputPlaylist: event.target.value });
  };

  createPlaylist = () => {
    const body = {
      name: this.state.inputPlaylist,
    };
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
        console.log(response.data);
        this.getAllPlaylists();
        alert("Playlist criada!");
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
      name: "",
    };

    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        {
          headers: {
            Authorization: "giovanna-magalhaes-ailton",
          },
          body,
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.getAllPlaylists();
  }

  deletePlaylists = (id) => {
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`,
        {
          headers: {
            Authorization: "giovanna-magalhaes-ailton",
          },
        }
      )
      .then((response) => {
        this.getAllPlaylists();
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
          <TituloPrincipal>LABEFY</TituloPrincipal>
        </header>
        <nav>
          <ul>
            {this.state.page === "Principal" && (
              <div>
                <input
                  id="name"
                  value={this.state.inputPlaylist}
                  onChange={this.onChangeInputPlaylist}
                />
                <button onClick={this.createPlaylist}> Criar Playlist </button>
              </div>
            )}
          </ul>
          {/* {this.state.page === "Lista de Playlists" && ( */}
          <div>
            {/* {this.state.playlists.map((item) => {
                return (
                  <p key={item.id}>
                    Nome: {item.name}
                    <button onClick={() => this.deletePlaylists(item.id)}>
                    Deletar Usuário
                  </button>
                    </p>
            );
          })} */}

          <button onClick={this.onClickPrincipal}> Página Principal </button>
          <button onClick={this.onClickListaPlaylist}>
            {" "}
            Lista de Playlists{" "}
          </button>
          </div>
          {/* )} */}
        </nav>
        <footer></footer>
      </div>
    );
  }
}

export default App;
