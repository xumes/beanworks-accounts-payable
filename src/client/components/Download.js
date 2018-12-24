import React from "react";
import ReactExport from "react-data-export";

const ExcelFile = ReactExport.ExcelFile;
const { ExcelSheet, ExcelColumn } = ReactExport.ExcelFile;

const dataSet1 = [
  {
    name: "Johson",
    amount: 30000,
    sex: "M",
    is_married: true
  },
  {
    name: "Monika",
    amount: 355000,
    sex: "F",
    is_married: false
  },
  {
    name: "John",
    amount: 250000,
    sex: "M",
    is_married: false
  },
  {
    name: "Josef",
    amount: 450500,
    sex: "M",
    is_married: true
  }
];

class Download extends React.Component {
  constructor(props) {
    super(props);

    if (this.props.dataSet) {
      console.log("DAta: ", this.props.dataSet);
    }
  }
  render() {
    return (
      <ExcelFile
        element={<button className="btn btn-primary">Download</button>}
      >
        <ExcelSheet data={this.props.dataSet} name="Vendors">
          <ExcelColumn
            label="Type"
            value={col => (col.IsSupplier ? "Supplier" : "Customer")}
          />
          <ExcelColumn label="Name" value="Name" />
          <ExcelColumn label="Email Address" value="EmailAddress" />
        </ExcelSheet>
      </ExcelFile>
    );
  }
}

export default Download;
