import "./InsightsItem1.css";
import { Table } from "react-bootstrap";

const InsightsItem1 = function () {
  return (
    <div className="table-responsive" style={{ padding: 20, margin: 5 }}>
      <Table
        bordered
        className="table nimmu-basic-table nimmu-bordered-table"
        style={{ borderCollapse: "collapse", borderSpacing: "0" }}
      >
        <thead>
          <tr>
            <th scope="col">Country</th>
            <th scope="col">Count</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>India</td>
            <td>214</td>
          </tr>
          <tr>
            <td>Cyprus</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Germany</td>
            <td>1</td>
          </tr>
          <tr>
            <td>United Kingdom</td>
            <td>1</td>
          </tr>
          <tr>
            <td>United States</td>
            <td>1</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default InsightsItem1;
