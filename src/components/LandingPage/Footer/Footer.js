import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

const Footer = function () {
  return (
    <footer
      className="nimmu-footer"
      style={{
        position: "relative",
        marginTop: "-15rem",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container fluid>
        <Row className="align-items-center">
          <Col lg={6}>
            <div
              className="nimmu-footer-btn text-md-left text-right mb-md-0 mb-3"
              style={{
                position: "absolute",
                marginLeft: "0.1rem",
                marginTop: "-1.3rem",
              }}
            >
              <a
                href="https://personakart.com/privacy.html"
                className="nimmu-ftr-btn nimmu-btn-info"
              >
                Privacy Policy
              </a>
              <a
                href="https://personakart.com/tandc.html"
                className="nimmu-ftr-btn nimmu-btn-success"
              >
                Terms and Conditions
              </a>
            </div>
          </Col>
          <Col>
            <p
              className="text-md-end text-center"
              style={{ position: "relative", marginTop: "3%", marginReft: "0" }}
            >
              © 2023 Personakart Analytics Pvt Ltd, India All rights reserved
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
