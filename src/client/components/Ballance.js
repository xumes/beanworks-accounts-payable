import React from "react";

const Ballance = props => {
  if (props.ballance && props.type == 'ap') {
    return <td>{props.ballance.AccountsPayable.Outstanding}</td>
  }

  if (props.ballance && props.type == 'ar') {
    return <td>{props.ballance.AccountsReceivable.Outstanding}</td>
  }

  return <td></td>
};

export default Ballance;
