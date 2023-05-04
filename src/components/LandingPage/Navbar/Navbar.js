import "./Navbar.css";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

const Navbar = function () {
  return (
    <div className="nimmu-top-header nimmu-top-header-primary">
      <Container fluid>
        <Row className="justify-content-end align-items-center">
          <Col lg={6} xs={2}>
            <a href="https://app.personakart.com">
              <img
                src="pklogonav.png"
                style={{
                  position: "relative",
                  maxWidth: 200,
                  top: "-1rem",
                  left: "-1rem",
                }}
              />
            </a>
          </Col>
          <Col lg={6} xs={10} className="right-container">
            <ul
              className="d-flex justify-content-end align-items-center item-container"
              style={{ listStyle: "none" }}
            >
              <li className="item">
                <div
                  className="alert alert-defaul nimmu-alert-defaul"
                  role="alert"
                  style={{
                    position: "relative",
                    height: "2.8rem",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <a
                    href="/packages"
                    style={{
                      color: "white",
                      margin: 0,
                      fontSize: "0.9rem",
                      textDecoration: "none",
                    }}
                  >
                    Upgrade Now!
                  </a>
                </div>
              </li>
              <li className="item">
                <div
                  className="btn-group"
                  style={{
                    textAlign: "center",
                    marginTop: "-1.4rem",
                  }}
                >
                  <button
                    type="button"
                    className="btn dropdown-toggle d-flex align-items-center"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="nimmu-avater">
                      <img
                        src="https://lh3.googleusercontent.com/a/AGNmyxYG_Fkv-s1Y8tCzLdbtOx4LEzbrakGXdLO-LfCk=s96-c"
                        className="img-fluid"
                        alt=""
                        style={{
                          position: "relative",
                          maxWidth: 40,
                          maxHeight: 40,
                          borderRadius: "50%",
                          overflow: "hidden",
                          boxShadow: "0 0 11px rgba(0, 0, 0, 0.15)",
                          border: "3px solid #ffce30",
                        }}
                      />
                    </span>
                    <span
                      style={{ position: "relative", marginLeft: "0.5rem" }}
                    >
                      <span
                        className="nimmu-profile-name"
                        style={{ position: "relative" }}
                      >
                        Saurav Agarwal
                      </span>{" "}
                      <i
                        className="fa fa-angle-down"
                        style={{ position: "relative", paddingBottom: "-40%" }}
                      />
                    </span>
                  </button>
                  <div className="dropdown-menu dropdown-menu-right nimmu-profile-option">
                    <ul>
                      <li>
                        <a href="javascript:;">agarwalsaurav6276@gmail.com</a>
                      </li>
                      <li>
                        <a href="/logout">Logout</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Navbar;
