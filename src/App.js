import React from 'react';
import './css/pure.css';
import './css/side-menu.css';
import './App.css';

import AuthorPage from './pages/AuthorPage.js';

class App extends React.Component {

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
          <AuthorPage />
        </div>
      </div>
    );
  }
}

export default App;
