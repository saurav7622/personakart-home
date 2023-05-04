import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";
import { Form } from "react-bootstrap";

import "./SearchBar.css";

const SearchBar = function ({ filter, setFilter }) {
  const [value, setValue] = useState(filter);
  const onChange = useAsyncDebounce((value) => {
    setFilter(value || undefined);
  }, 1000);
  return (
    <div
      className="dataTables_filter d-flex align-items-center ms-auto"
      style={{ position: "relative", bottom: "2rem" }}
    >
      <Form.Label className="me-2">Search:</Form.Label>
      <Form.Control
        type="search"
        className="form-control-sm"
        placeholder=""
        aria-controls="custom-datatable"
        bsPrefix="custom-control"
        style={{ width: "120%", height: "80%" }}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchBar;
