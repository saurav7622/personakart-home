import React from "react";

import "./RenameListModal.css";

import { Modal, Button, Form } from "react-bootstrap";

const RenameListModal = function (props) {
  return (
    <Modal
      fade
      id="change0"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <Modal.Dialog role="document">
        <Modal.Content>
          <Modal.Header>
            <Modal.Title id="exampleModalLabel">
              Marathon Data With Results
            </Modal.Title>
            <Button
              variant="link"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </Button>
          </Modal.Header>
          <Modal.Body>
            <Form
              action="/changename?id=63fea4eb7fe3a7dc94d75ca5"
              method="post"
            >
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Enter New Name"
                  name="name"
                  required
                />
              </Form.Group>
              <Form.Group className="mt-3">
                <Button type="submit" variant="dark" className="form-control">
                  Save changes
                </Button>
              </Form.Group>
            </Form>
          </Modal.Body>
        </Modal.Content>
      </Modal.Dialog>
    </Modal>
  );
};

export default RenameListModal;
