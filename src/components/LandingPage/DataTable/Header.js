import "./Header.css";

const Header = function () {
  return (
    <div className="row item-container">
      <div className="col-sm-12 col-md-6">
        <div className="dataTables_length item1" id="custom-datatable_length">
          <label>
            <span style={{ position: "relative", top: "-8%" }}>Show </span>
            <select
              name="custom-datatable_length"
              aria-controls="custom-datatable"
              className="custom-select custom-select-sm form-control form-control-sm"
            >
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>{" "}
            <span style={{ position: "absolute", top: "20%", left: "99%" }}>
              entries
            </span>
          </label>
        </div>
      </div>
      <div className="col-sm-12 col-md-6">
        <div
          id="custom-datatable_filter item2"
          className="dataTables_filter"
          style={{ position: "relative", left: "185%", top: "-10%" }}
        >
          <label>
            <span style={{ position: "relative", top: "-8%" }}>Search:</span>
            <input
              type="search"
              className="form-control form-control-sm"
              placeholder=""
              aria-controls="custom-datatable"
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Header;
