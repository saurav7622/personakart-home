import { Link } from "react-router-dom";
import "./BreadCrumb2.css";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

const BreadCrumb2 = function () {
  return (
    <div
      className="nimmu-breadcrumb"
      style={{ position: "relative", top: "-2rem" }}
    >
      <Container fluid>
        <Row>
          <Col xs={12}>
            <ul className="d-flex">
              <li>Personakart</li>
              <li>
                <Link to="/" style={{ textDecoration: "none" }}>
                  Dashboard
                </Link>
              </li>
              <li>Marathon Data With Results</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BreadCrumb2;
