import "./Table.css";

const Table = function () {
  return (
    <div className="col-sm-12">
      <table
        id="custom-datatable"
        className="display table-striped table-bordered nimmu-bordered-table nimmu-basic-table dataTable no-footer dtr-inline collapsed"
        width="100%"
        role="grid"
        aria-describedby="custom-datatable_info"
        style={{ width: "100%" }}
      >
        <thead>
          <tr role="row">
            <th
              className="all sorting_asc"
              tabIndex={0}
              aria-controls="custom-datatable"
              rowSpan={1}
              colSpan={1}
              style={{ width: 131 }}
              aria-sort="ascending"
              aria-label="Name: activate to sort column descending"
            >
              List Name
            </th>
            <th
              className="teblet sorting"
              tabIndex={0}
              aria-controls="custom-datatable"
              rowSpan={1}
              colSpan={1}
              style={{ width: 195 }}
              aria-label="Position: activate to sort column ascending"
            >
              Status
            </th>
            <th
              tabIndex={0}
              aria-controls="custom-datatable"
              rowSpan={1}
              colSpan={1}
              style={{ width: 195 }}
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          <tr role="row" className="odd">
            <td tabIndex={0} className="sorting_1">
              Airi Satou
            </td>
            <td>Accountant</td>
            <td>Tokyo</td>
          </tr>
          <tr role="row" className="even">
            <td tabIndex={0} className="sorting_1">
              Ashton Cox
            </td>
            <td>Junior Technical Author</td>
            <td>San Francisco</td>
          </tr>
          <tr role="row" className="odd">
            <td className="sorting_1" tabIndex={0}>
              Bradley Greer
            </td>
            <td>Software Engineer</td>
            <td>London</td>
          </tr>
          <tr role="row" className="even">
            <td tabIndex={0} className="sorting_1">
              Brielle Williamson
            </td>
            <td>Integration Specialist</td>

            <td>New York</td>
          </tr>
          <tr role="row" className="odd">
            <td tabIndex={0} className="sorting_1">
              Cedric Kelly
            </td>
            <td>Senior Javascript Developer</td>

            <td>Edinburgh</td>
          </tr>
          <tr role="row" className="even">
            <td className="sorting_1" tabIndex={0}>
              Charde Marshall
            </td>
            <td>Regional Director</td>

            <td>San Francisco</td>
          </tr>
          <tr role="row" className="odd">
            <td tabIndex={0} className="sorting_1">
              Colleen Hurst
            </td>
            <td>Javascript Developer</td>

            <td>San Francisco</td>
          </tr>
          <tr role="row" className="even">
            <td className="sorting_1" tabIndex={0}>
              Dai Rios
            </td>
            <td>Personnel Lead</td>

            <td>Edinburgh</td>
          </tr>
          <tr role="row" className="odd">
            <td tabIndex={0} className="sorting_1">
              Garrett Winters
            </td>
            <td>Accountant</td>

            <td>Tokyo</td>
          </tr>
          <tr role="row" className="even">
            <td className="sorting_1" tabIndex={0}>
              Gloria Little
            </td>
            <td>Systems Administrator</td>

            <td>New York</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
