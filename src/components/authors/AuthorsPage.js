import React from 'react';
import axios from 'axios';

const URL = 'http://localhost:8080/api';

class AuthorsPage extends React.Component {

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

          <div>
            {this.state.list.length ? (
              <table className="pure-table">
                <thead>
                  <tr>
                    <th>name</th>
                    <th>email</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    this.state.list.map(author =>
                      (
                        <tr key={author.id}>
                          <td>{author.nome}</td>
                          <td>{author.email}</td>
                        </tr>
                      )
                    )
                  }
                </tbody>
              </table>
            ) : (
              <p className="error-text">No records found.</p>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default AuthorsPage;
