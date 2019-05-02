import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './css/pure.css';
import './css/side-menu.css';
import './App.css';

import HomePage from './pages/HomePage.js';
import AuthorsPage from './pages/AuthorsPage.js';
import BooksPage from './pages/BooksPage.js';

class App extends React.Component {

  render() {
    return (
      <div id="layout">
        <Router>
          <a href="#menu" id="menuLink" className="menu-link">
            <span></span>
          </a>

          <div id="menu">
            <div className="pure-menu">
                <a className="pure-menu-heading" href="#">Company</a>
                <ul className="pure-menu-list">
                  <li className="pure-menu-item">
                    <Link to="/" className="pure-menu-link">Home</Link>
                  </li>
                  <li className="pure-menu-item">
                    <Link to="/authors" className="pure-menu-link">Authors</Link>
                  </li>
                  <li className="pure-menu-item">
                      <Link to="/books" className="pure-menu-link">Books</Link>
                  </li>
                </ul>
            </div>
          </div>

          <div id="main">
            <Route path="/" exact component={HomePage} />
            <Route path="/authors" component={AuthorsPage} />
            <Route path="/books" component={BooksPage} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
