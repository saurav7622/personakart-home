import React from "react";

import "./DetailedReportTable.css";
import Card from "../../UI/Card";
import TableContents from "./TableContents";

const DetailedReportTable = function () {
  return (
    <Card className="detailed-report-table">
      {" "}
      <div
        style={{
          position: "relative",
          textAlign: "center",
          fontWeight: "700",
          fontSize: "120%",
        }}
      >
        Search Results
      </div>
      <TableContents />
    </Card>
  );
};

export default DetailedReportTable;
