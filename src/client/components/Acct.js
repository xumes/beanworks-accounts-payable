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
      {props.info && props.info.ShowInExpenseClaims && <td><span class="badge badge-info">YES</span></td>}
      {props.info && !props.info.ShowInExpenseClaims && <td><span class="badge badge-secondary">NO</span></td>}
    </tr>
  );
};

export default Acct;
