import React from "react";
import { connect } from "react-redux";

const Home = ({ xero }) => {
  if (!xero.org) {
    return null;
  }
  const {
    Name,
    BaseCurrency,
    CountryCode,
    SalesTaxBasis,
    SalesTaxPeriod
  } = xero.org.Organisations[0];
  const {
    AddressLine1,
    AddressLine2,
    City
  } = xero.org.Organisations[0].Addresses[0];
  const {
    PhoneAreaCode,
    PhoneNumber,
    PhoneType
  } = xero.org.Organisations[0].Phones[0];

  return (
    <div>
      <div className="jumbotron">
        <h1 className="display-4">{Name}</h1>
        <p className="lead">
          {AddressLine1}, {AddressLine2}, {City} / {CountryCode}
        </p>
        <p className="lead">
          {PhoneType}: ({PhoneAreaCode}) {PhoneNumber}
        </p>
        <hr className="my-4" />
        <ul className="list-group">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Sales Tax Basis
            <span className="badge badge-primary badge-pill">
              {SalesTaxBasis}
            </span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Sales Tax Period
            <span className="badge badge-primary badge-pill">
              {SalesTaxPeriod}
            </span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Base Currency
            <span className="badge badge-primary badge-pill">
              {BaseCurrency}
            </span>
          </li>
        </ul>
      </div>
      <div className="button-area">
        <div className="row">
          <div className="col-sm-6">
            <div className="card">
              <img
                className="card-img-top logo-area"
                src={require("./../images/vendors.jpg")}
              />
              <div className="card-body">
                <h5 className="card-title">Vendors List</h5>
                <p className="card-text">
                  Visualize and export the list of vendors.
                </p>
                <a href="/vendors" className="btn btn-primary btn-lg btn-block">
                  Vendors
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <img
                className="card-img-top logo-area"
                src={require("./../images/accts.jpg")}
              />
              <div className="card-body">
                <h5 className="card-title">Accounts List</h5>
                <p className="card-text">
                  Visualize and export the list of accounts.
                </p>
                <a href="/accounts" className="btn btn-primary btn-lg btn-block">
                  Accounts
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return { xero: state.xero };
}

export default connect(mapStateToProps)(Home);
