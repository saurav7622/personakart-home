import "./BreadCrumb.css";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

const BreadCrumb = function () {
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
              <li>Dashboard</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BreadCrumb;
