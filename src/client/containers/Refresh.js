import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchXero } from "./../actions";

class Refresh extends Component {
  constructor(props) {
    super(props);

    this.onRefreshClick = this.onRefreshClick.bind(this);

    //call the refresh on the first load
    this.props.fetchXero();
  }

  onRefreshClick(event) {
    event.preventDefault();

    this.props.fetchXero();
  }

  render() {
    if (!this.props.xero.org) {
      return (
        <div>
          <h1>Accounts Payable System</h1>
          <h2>{JSON.stringify(this.props.xero)}</h2>
          <h3>No data available</h3>
          <a href="/api/connect"> Connect to Xero</a>
        </div>
      );
    }
    return (
      <div>
        <button
          onClick={this.onRefreshClick}
          className="btn btn-primary btn-lg btn-block"
        >
          Refresh
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { xero: state.xero };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchXero }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Refresh);
