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
            <th scope="col">Company Size</th>
            <th scope="col">Count</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>10,001+ employees</td>
            <td>48</td>
          </tr>

          <tr>
            <td>1,001-5,000 employees</td>
            <td>17</td>
          </tr>

          <tr>
            <td>11-50 employees</td>
            <td>13</td>
          </tr>

          <tr>
            <td>501-1,000 employees</td>
            <td>12</td>
          </tr>

          <tr>
            <td>51-200 employees</td>
            <td>11</td>
          </tr>

          <tr>
            <td>2-10 employees</td>
            <td>7</td>
          </tr>

          <tr>
            <td>5,001-10,000 employees</td>
            <td>7</td>
          </tr>

          <tr>
            <td>201-500 employees</td>
            <td>4</td>
          </tr>

          <tr>
            <td>0-1 employees</td>
            <td>1</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default InsightsItem1;
