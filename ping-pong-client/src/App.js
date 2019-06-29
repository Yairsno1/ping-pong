import React, {Component} from 'react';
import ping from './pingRequest';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      canPing: true,
      echo: "",
    }

    this.handlePing = this.handlePing.bind(this);
  }

  handlePing() {
    if (this.state.canPing) {
      this.setState({canPing: false,});

      this.setState((state, props) => ({
        canPing: false,
        echo: state.echo + "ping... "
      }));

      ping((answer) => { /*successful ping */
        this.setState((state, props) => ({
          echo: `${state.echo}${answer}, `,
        }));
        this.setState((state, props) => ({
          canPing: true,
        }));
      }, () => { /*failed ping */
        this.setState((state, props) => ({
          echo: `${state.echo}oops, `,
        }));
        this.setState((state, props) => ({
          canPing: true,
        }));
      });
    }
  }

  render()
  {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div style={{marginTop: "16px"}}>
            <button className = {"ping-btn"} onClick={this.handlePing}>
              Ping <i class="fas fa-table-tennis"></i>
            </button>
        </div>
        <div style={{marginTop: "8px"}}>
            <p>
              {this.state.echo}
            </p>
        </div>
        </header>
      </div>
  )};
}

export default App;
