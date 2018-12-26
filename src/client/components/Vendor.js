import React from 'react'
import VendorType from './VendorType'
import Ballance from './Ballance'

const Vendor = props => {
  const type = {
    isSupplier: props.info.IsSupplier,
    isCustomer: props.info.IsCustomer
  }
  return (
    <tr key={props.info.ContactID}>
      <td>
        <VendorType type={type} />
      </td>
      <td>{props.info.Name}</td>
      <td>{props.info.EmailAddress}</td>
      <Ballance
        ballance={props.info.Balances}
        type='ap'
        key={props.info.ContactID + 'ap'}
      />
      <Ballance
        ballance={props.info.Balances}
        type='ar'
        key={props.info.ContactID + 'ar'}
      />
    </tr>
  )
}

export default Vendor
