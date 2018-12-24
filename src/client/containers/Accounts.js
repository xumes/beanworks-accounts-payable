import React, { Component } from "react";
import { connect } from "react-redux";

import Account from './../components/Acct'

class Accounts extends Component {
  render() {
    return (
      <div>
        <div className="alert alert-primary" role="alert">
          Accounts
        </div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Accounts
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-item nav-link active" href="/">
                Home <span className="sr-only">(current)</span>
              </a>
              <a className="nav-item nav-link" href="/vendors">
                Vendors
              </a>
              <a className="nav-item nav-link disabled" href="/accounts">
                Accounts
              </a>
            </div>
          </div>
        </nav>
        <div>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Type</th>
                <th scope="col">Name</th>
                <th scope="col">Class</th>
                <th scope="col">Code</th>
                <th scope="col">Description</th>
                <th scope="col">Reporting Code</th>
                <th scope="col">Reporting Name</th>
                <th scope="col">Expense Claims</th>
                <th scope="col">Payments To Account</th>
              </tr>
            </thead>
            <tbody>
            {
                this.props.accts && this.props.accts.Accounts &&
                    this.props.accts.Accounts.map((acct) => {
                        return <Account info={acct} key={acct.AccountID}/>
                    })
                }
            }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { accts: state.xero.accts };
}

export default connect(mapStateToProps)(Accounts);
