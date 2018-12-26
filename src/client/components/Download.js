import React from 'react'
import ReactExport from 'react-data-export'

const ExcelFile = ReactExport.ExcelFile
const { ExcelSheet, ExcelColumn } = ReactExport.ExcelFile

class Download extends React.Component {
  render () {
    if (this.props.source === 'vendors') {
      return (
        <ExcelFile
          element={<button className='btn btn-primary'>Download</button>}
        >
          <ExcelSheet data={this.props.dataSet} name='Vendors'>
            <ExcelColumn
              label='Type'
              value={col => (col.IsSupplier ? 'Supplier' : 'Customer')}
            />
            <ExcelColumn label='Name' value='Name' />
            <ExcelColumn label='Email Address' value='EmailAddress' />
          </ExcelSheet>
        </ExcelFile>
      )
    }
    return (
      <ExcelFile
        element={<button className='btn btn-primary'>Download</button>}
      >
        <ExcelSheet data={this.props.dataSet} name='Accounts'>
          <ExcelColumn label='Type' value='Type' />
          <ExcelColumn label='Name' value='Name' />
          <ExcelColumn label='Class' value='Class' />
          <ExcelColumn label='Code' value='Code' />
          <ExcelColumn label='Description' value='Description' />
          <ExcelColumn label='Reporting Code' value='ReportingCode' />
          <ExcelColumn label='Reporting Name' value='ReportingCodeName' />
          <ExcelColumn
            label='Show in Expense Claims?'
            value={col => (col.ShowInExpenseClaims ? 'Yes' : 'No')}
          />
          <ExcelColumn
            label='Enable Payments to Account?'
            value={col => (col.EnablePaymentsToAccount ? 'Yes' : 'No')}
          />
        </ExcelSheet>
      </ExcelFile>
    )
  }
}

export default Download
