import React, { Component } from "react";
import "./App.css";
import Etapa1 from "./Components/Etapa1";
import Etapa2 from "./Components/Etapa2";
import Etapa3 from "./Components/Etapa3";
import Final from "./Components/Final";

class App extends Component {
  state = {
    telaPrincipal: "Etapa1",
  };

  goEtapa2 = () => {
    this.setState({
      telaPrincipal: "Etapa2"
    });
  };

  goEtapa3 = () => {
    this.setState({
      telaPrincipal: "Etapa3"
    });
  };

  goFinal = () => {
    this.setState({
      telaPrincipal: "Final"
    })
  }

  trocaTela = () => {
    switch (this.state.telaPrincipal) {
      case "Etapa1":
        return <Etapa1 goEtapa2={this.goEtapa2} />;
        break;
          case "Etapa2":
            return <Etapa2 goEtapa3={this.goEtapa3} />;
            break;
            case "Etapa3":
              return <Etapa3 goFinal={this.goFinal}/>;
              break;
              case "Final":
                return <Final/>
        }
    }
    render() {
      return (
      <div>{this.trocaTela()}</div>
    
    );
  };

}

export default App;
