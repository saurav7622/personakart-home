import { Form } from "react-bootstrap";
import "./ShowEntries.css";

const ShowEntries = function () {
  return (
    <div
      className="dataTables_length d-flex align-items-center"
      id="custom-datatable_length"
      style={{ position: "relative", top: "1rem" }}
    >
      <div
        className="me-2 small"
        style={{ position: "relative", bottom: "0.3rem" }}
      >
        Show
      </div>
      <Form.Label className="me-2 small">
        <Form.Select
          name="custom-datatable_length"
          aria-controls="custom-datatable"
          className="custom-select custom-select-sm form-control-sm"
        >
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </Form.Select>
      </Form.Label>
      <div
        className="ms-2 small"
        style={{ position: "relative", bottom: "0.3rem", right: "0.4rem" }}
      >
        entries
      </div>
    </div>
  );
};

export default ShowEntries;
