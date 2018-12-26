import React from 'react'
import Workbook from 'react-excel-workbook'

const Download = props => {
  if (props.source === 'vendors') {
    return (
      <Workbook filename='vendors.xlsx' element={<button className='btn btn-lg btn-primary'>Download</button>}>
        <Workbook.Sheet data={props.dataSet} name='Vendors'>
          <Workbook.Column label='Type' value={col => (col.IsSupplier ? 'Supplier' : 'Customer')} />
          <Workbook.Column label='Name' value='Name' />
          <Workbook.Column label='Email Address' value='EmailAddress' />
        </Workbook.Sheet>
      </Workbook>
    )
  }
  return (
    <Workbook filename='vendors.xlsx' element={<button className='btn btn-lg btn-primary'>Download</button>}>
      <Workbook.Sheet data={props.dataSet} name='Accounts'>
        <Workbook.Column label='Type' value='Type' />
        <Workbook.Column label='Name' value='Name' />
        <Workbook.Column label='Class' value='Class' />
        <Workbook.Column label='Code' value='Code' />
        <Workbook.Column label='Description' value='Description' />
        <Workbook.Column label='Reporting Code' value='ReportingCode' />
        <Workbook.Column label='Reporting Name' value='ReportingCodeName' />
        <Workbook.Column
          label='Show in Expense Claims?'
          value={col => (col.ShowInExpenseClaims ? 'Yes' : 'No')}
        />
        <Workbook.Column
          label='Enable Payments to Account?'
          value={col => (col.EnablePaymentsToAccount ? 'Yes' : 'No')}
        />
      </Workbook.Sheet>
    </Workbook>
  )
}

export default Download
