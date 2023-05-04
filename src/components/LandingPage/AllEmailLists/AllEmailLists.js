import { Link } from "react-router-dom";
import "./AllEmailLists.css";
import { Container, Table, Badge, Button } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

const AllEmailLists = function (props) {
  return (
    <Col xl={9} lg={9} xs={12} className="mb-xl-0 mb-4">
      <div
        className="default-card"
        style={{
          height: 500,
          overflowY: "auto",
          position: "relative",
          top: "-20rem",
        }}
      >
        <div className="card-header">
          <h3>All E-mail Lists</h3>
        </div>
        <div style={{ position: "relative", top: "4rem" }}>
          <div className="table-responsive">
            <Table striped bordered hover className="nimmu-basic-table">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Status</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Marathon Data With Results</td>
                  <td style={{ color: "green" }}>
                    <Badge variant="success">Ready</Badge>
                  </td>
                  <td>
                    <Link
                      to="/dashboard/detailedReport"
                      type="button"
                      className="btn btn-success nimmu-btn nimmu-btn-text-success"
                      style={{ position: "relative", margin: "0 0.5rem" }}
                      onClick={props.onShowDetailedReport}
                    >
                      Check Results
                    </Link>
                    <button
                      className="btn btn-success nimmu-btn nimmu-btn-text-success"
                      data-toggle="modal"
                      data-target="#change0"
                      style={{ position: "relative", margin: "0 0.5rem" }}
                      onClick={props.onShow}
                    >
                      Change Name
                    </button>
                    {/* Modal */}

                    <button
                      className="btn btn-danger nimmu-btn nimmu-btn-text-danger"
                      data-toggle="modal"
                      data-target="#delete0"
                      style={{ position: "relative", margin: "0 0.5rem" }}
                    >
                      Delete List
                    </button>
                    {/* Modal */}
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default AllEmailLists;
