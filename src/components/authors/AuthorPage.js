import React from 'react';
import axios from 'axios';

import AuthorForm from './AuthorForm';
import AuthorList from './AuthorList';

const URL = 'http://localhost:8080/api';

class AuthorPage extends React.Component {

  constructor() {
    super();

    this.state = {
      list: []
    };
  }

  componentDidMount() {
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
      <div>
        <div className="header">
          <h1>Author registration</h1>
          {/* <h2>A subtitle for your page goes here</h2> */}
        </div>

        <div className="content" id="content">
          <AuthorForm />
          <AuthorList list={this.state.list} />
        </div>
      </div>
    )
  }
}

export default AuthorPage;
