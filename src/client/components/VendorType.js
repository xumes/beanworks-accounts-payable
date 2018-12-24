import React from "react";

const VendorType = props => {
  if (props.type.isCustomer && props.type.isSupplier) {
    return (
      <span>
        <span className="badge badge-success">Customer</span>
        <span className="badge badge-info">Supplier</span>
      </span>
    );
  }

  if (props.type.isCustomer) {
    return <span className="badge badge-success">Customer</span>;
  }

  if (props.type.isSupplier) {
    return <span className="badge badge-info">Supplier</span>;
  }

  return <span className="badge badge-secondary">Not identified</span>;
};

export default VendorType;
