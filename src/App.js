import React from 'react';
import './css/pure.css';
import './css/side-menu.css';
import './App.css';

import axios from 'axios';

const URL = 'http://localhost:8080/api';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      list: []
    };
  }

  componentWillMount() {
    axios.get(URL + '/autores')
      .then(response => {
        // handle success
        this.setState({
          list: response.data,
        });
      })
      .catch(error => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
  }

  render() {
    return (
      <div id="layout">
        <a href="#menu" id="menuLink" className="menu-link">
          <span></span>
        </a>

        <div id="menu">
          <div className="pure-menu">
              <a className="pure-menu-heading" href="#">Company</a>

              <ul className="pure-menu-list">
                  <li className="pure-menu-item">
                    <a href="#" className="pure-menu-link">Home</a>
                  </li>
                  <li className="pure-menu-item">
                    <a href="#" className="pure-menu-link">Autor</a>
                  </li>
                  <li className="pure-menu-item">
                      <a href="#" className="pure-menu-link">Livro</a>
                  </li>
              </ul>
          </div>
        </div>

        <div id="main">
          <div className="header">
            <h1>Cadastro de autor</h1>
            {/* <h2>A subtitle for your page goes here</h2> */}
          </div>

          <div className="content" id="content">
            <div className="pure-form pure-form-aligned">
              <form className="pure-form pure-form-aligned">
                <div className="pure-control-group">
                  <label htmlFor="nome">Nome</label>
                  <input id="nome" type="text" name="nome" value=""  />
                </div>
                <div className="pure-control-group">
                  <label htmlFor="email">Email</label>
                  <input id="email" type="email" name="email" value=""  />
                </div>
                <div className="pure-control-group">
                  <label htmlFor="senha">Senha</label>
                  <input id="senha" type="password" name="senha"  />
                </div>
                <div className="pure-control-group">
                  <label></label>
                  <button type="submit" className="pure-button pure-button-primary">Gravar</button>
                </div>
              </form>
            </div>

            <div>
              {this.state.list.length ? (
                <table className="pure-table">
                  <thead>
                    <tr>
                      <th>Nome</th>
                      <th>email</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      this.state.list.map(author =>
                        (
                          <tr>
                            <td>{author.nome}</td>
                            <td>{author.email}</td>
                          </tr>
                        )
                      )
                    }
                  </tbody>
                </table>
              ) : (
                <p className="error-text">Nenhum registro encontrado.</p>
              )}
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
