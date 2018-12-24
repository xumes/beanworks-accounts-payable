import React, { Component } from "react";
import { connect } from "react-redux";
import Vendor from "../components/Vendor";

class Vendors extends Component {
  render() {
    return (
      <div>
        <div className="alert alert-primary" role="alert">
          Vendors
        </div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Vendors
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
              <a className="nav-item nav-link disabled" href="/vendors">
                Vendors
              </a>
              <a className="nav-item nav-link" href="/accounts">
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
                <th scope="col">Email</th>
                <th scope="col">Accts Payable</th>
                <th scope="col">Accts Receivable</th>
              </tr>
            </thead>
            <tbody>
            {
                this.props.contacts && this.props.contacts.Contacts &&
                    this.props.contacts.Contacts.map((vendor) => {
                        return <Vendor info={vendor} />
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
  return { contacts: state.xero.contacts };
}

export default connect(mapStateToProps)(Vendors);
