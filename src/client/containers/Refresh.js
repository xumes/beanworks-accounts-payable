import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchXero } from './../actions'

class Refresh extends Component {
  constructor (props) {
    super(props)

    this.onRefreshClick = this.onRefreshClick.bind(this)

    // call the refresh on the first load
    this.props.fetchXero()
  }

  onRefreshClick (event) {
    event.preventDefault()

    this.props.fetchXero()
  }

  render () {
    if (!this.props.xero.org) {
      return (
        <div className='home-no-data'>
          <div className='card border-primary mb-3'>
            <div className='card-header'><h1>So Fictitious Bar & Pub</h1></div>
            <div className='card-body text-primary'>
              <h5 className='card-title'>Accounts Payable System</h5>
              <p className='card-text'>Please, connect to your Xero account.</p>
            </div>
            <div className='card-footer bg-transparent border-info'>
              <a className='btn btn-light btn-lg' href='/api/connect'>
                {' '}
                Connect to Xero
              </a>
            </div>
          </div>
        </div>
      )
    }
    return (
      <div className='alert alert-primary' role='alert'>
        <h1>So Fictitious Bar & Pub</h1>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return { xero: state.xero }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ fetchXero }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Refresh)
