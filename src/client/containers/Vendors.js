import React, { Component } from "react";
import { connect } from "react-redux";
import Vendor from "../components/Vendor";
import Download from "./../components/Download";

class Vendors extends Component {
  render() {
    return (
      <div className="vendors">
        <div className="alert alert-primary" role="alert">
          Vendors List
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
        <div className="border border-primary rounded">
          <div
            className="btn-toolbar download-bar"
            role="toolbar"
            aria-label="Toolbar with button groups"
          >
            <div
              className="btn-group mr-2"
              role="group"
              aria-label="First group"
            >
              {this.props.contacts && this.props.contacts.Contacts && (
                <Download
                  dataSet={this.props.contacts.Contacts}
                  source="vendors"
                />
              )}
            </div>
          </div>
        </div>
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
              {this.props.contacts &&
                this.props.contacts.Contacts &&
                this.props.contacts.Contacts.map(vendor => {
                  return <Vendor info={vendor} key={vendor.ContactID} />;
                })}
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
