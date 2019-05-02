
import React from 'react';

class AuthorList extends React.Component {

  render() {
    return (
      <div>
        {this.props.list.length ? (
          <table className="pure-table">
            <thead>
              <tr>
                <th>name</th>
                <th>email</th>
              </tr>
            </thead>
            <tbody>
              {
                this.props.list.map(author =>
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
    );
  }
}

export default AuthorList;
