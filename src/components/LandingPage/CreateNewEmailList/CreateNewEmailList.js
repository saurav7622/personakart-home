import "./CreateNewEmailList.css";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";

const CreateNewEmailList = function () {
  return (
    <Col xl={3} lg={6} xs={12} className="mb-xl-0 mb-4">
      <div
        className="default-card"
        style={{
          position: "relative",
          top: "-20rem",
          left: "-6.1rem",
          width: "133%",
          height: 500,
        }}
      >
        <div
          className="card-header"
          style={{ position: "relative", marginLeft: "2.8rem" }}
        >
          <h3>Create new e-mail list</h3>
        </div>

        <div className="nimmu-card-body">
          <Container fluid>
            <Row>
              <Col xs={12}>
                <div className="default-card">
                  <form
                    action="/fu"
                    method="POST"
                    encType="multipart/form-data"
                    className="dropzone"
                    id="my-great-dropzone"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      maxWidth: "140%",
                    }}
                  >
                    <div>
                      <input
                        name="file"
                        type="file"
                        style={{ position: "relative", height: "100%" }}
                      />
                    </div>
                  </form>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </Col>
  );
};

export default CreateNewEmailList;
