import React from 'react';
import axios from 'axios';

const API = 'http://localhost:8080/api';

class AuthorForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: ''
    };

    this.setName = this.setName.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.saveAuthor = this.saveAuthor.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }

  setName(e) {
    this.setState({name: e.target.value});
  }
  setEmail(e) {
    this.setState({email: e.target.value});
  }
  setPassword(e) {
    this.setState({password: e.target.value});
  }

  saveAuthor(e) {
    e.preventDefault();

    const authorData = {
      nome: this.state.name,
      email: this.state.email,
      senha: this.state.password,
    };

    axios.post(API + '/autores', authorData)
      .then(response => {
        // handle success
        this.props.setAuthorsList(response.data);
        this.clearForm();
      })
      .catch(error => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
  }

  clearForm() {
    this.setState({
      name: '',
      email: '',
      password: ''
    });
  }

  render() {
    return (
      <div className="pure-form pure-form-aligned">
        <form className="pure-form pure-form-aligned" onSubmit={this.saveAuthor}>
          <div className="pure-control-group">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" name="name" value={this.state.name} onChange={this.setName} />
          </div>
          <div className="pure-control-group">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="email" value={this.state.email} onChange={this.setEmail} />
          </div>
          <div className="pure-control-group">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" name="password" value={this.state.password} onChange={this.setPassword} />
          </div>
          <div className="pure-control-group">
            <label></label>
            <button type="submit" className="pure-button pure-button-primary">Save</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AuthorForm;