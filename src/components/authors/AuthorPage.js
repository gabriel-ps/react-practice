import React from 'react';
import axios from 'axios';

import AuthorForm from './AuthorForm';
import AuthorList from './AuthorList';
import environment from '../../environment';

const API = environment.ApiUrl;

class AuthorPage extends React.Component {

  constructor() {
    super();

    this.state = {
      list: []
    };

    this.setAuthorsList = this.setAuthorsList.bind(this);
  }

  componentDidMount() {
    axios.get(API + '/autores')
      .then(response => {
        // handle success
        this.setAuthorsList(response.data);
      })
      .catch(error => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
  }

  setAuthorsList(list) {
    this.setState({list});
  }

  render() {
    return (
      <div>
        <div className="header">
          <h1>Author registration</h1>
          {/* <h2>A subtitle for your page goes here</h2> */}
        </div>

        <div className="content" id="content">
          <AuthorForm setAuthorsList={this.setAuthorsList} />
          <AuthorList list={this.state.list} />
        </div>
      </div>
    )
  }
}

export default AuthorPage;
