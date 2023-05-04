import Table from "./Table";
import React from "react";
import "./DataTable.css";

const DataTable = function () {
  return (
    <div
      id="custom-datatable_wrapper"
      className="dataTables_wrapper dt-bootstrap4 no-footer"
    >
      <Table />
    </div>
  );
};

export default DataTable;
