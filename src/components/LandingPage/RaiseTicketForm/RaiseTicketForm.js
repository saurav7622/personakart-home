import "./RaiseTicketForm.css";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";

const RaiseTicketForm = function () {
  return (
    <Row className="mt-4">
      <Col xl={12} xs={12}>
        <div
          className="default-card"
          style={{
            height: 500,
            top: "-60%",
            left: "-8%",
            width: "110%",
          }}
        >
          <div
            className="card-header"
            style={{ position: "absolute", marginLeft: "6rem" }}
          >
            <h3>Raise a Ticket</h3>
          </div>
          <div
            className="nimmu-card-body"
            style={{ padding: 40, marginTop: "-3%" }}
          >
            <form action="/support" method="post">
              <div>
                <label htmlFor="regular-form-1" className="form-label">
                  Write about your issue
                </label>
                <input
                  id="regular-form-1"
                  type="text"
                  className="form-control"
                  placeholder="Subject : Error in uploading list"
                  name="name"
                  required=""
                  style={{
                    position: "relative",
                    padding: "1rem 0.5rem",
                    fontWeight: "400",
                    fontSize: "100%",
                  }}
                />
                <input
                  id="regular-form-1"
                  type="text"
                  className="form-control mt-4"
                  placeholder="Explain the issue in few words"
                  name="desc"
                  required=""
                  style={{
                    position: "relative",
                    padding: "1rem 0.5rem",
                    fontWeight: "400",
                    fontSize: "100%",
                  }}
                />
              </div>

              <Container className="mt-3">
                <Button
                  style={{
                    background: "black",
                    position: "relative",
                  }}
                  className="form-control"
                >
                  Submit
                </Button>
              </Container>
            </form>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default RaiseTicketForm;
