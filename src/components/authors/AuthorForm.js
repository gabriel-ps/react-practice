import React from 'react';

class AuthorForm extends React.Component {

  render() {
    return (
      <div className="pure-form pure-form-aligned">
        <form className="pure-form pure-form-aligned">
          <div className="pure-control-group">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" name="nome" />
          </div>
          <div className="pure-control-group">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="email" />
          </div>
          <div className="pure-control-group">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" name="senha"  />
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