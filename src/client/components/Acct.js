import React from "react";

const Acct = props => {
  return (
    <tr key={props.info.AccountID}>
      <td>{props.info.Type}</td>
      <td>{props.info.Name}</td>
      <td>{props.info.Class}</td>
      <td>{props.info.Code}</td>
      <td>{props.info.Description}</td>
      <td>{props.info.ReportingCode}</td>
      <td>{props.info.ReportingCodeName}</td>
      <td>{props.info.ShowInExpenseClaims}</td>
      <td>{props.info.EnablePaymentsToAccount}</td>
    </tr>
  );
};

export default Acct;
