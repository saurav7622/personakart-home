import React, { useMemo, useState } from "react";
import {
  useTable,
  useSortBy,
  useFilters,
  useGlobalFilter,
  usePagination,
} from "react-table";
import { Form } from "react-bootstrap";
import MOCK_DATA from "../../../utils/MOCK_DATA.json";
import COLUMNS from "./columns";
import "./TableContents.css";
import SearchBar from "./SearchBar";
import { Col, Pagination } from "react-bootstrap";

const TableContents = function () {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  console.log(COLUMNS);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    prepareRow,
    pageOptions,
    gotoPage,
    state,
    setPageSize,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      initialState: { sortBy: [{ id: "E-mail", asc: true }] },
    },

    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { pageIndex, pageSize, globalFilter } = state;
  console.log("Page Size");
  console.log(pageSize);
  console.log(pageOptions.length);
  const goToPageHandler = function (e) {
    e.preventDefault();
  };
  return (
    <React.Fragment>
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
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
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
      <SearchBar filter={globalFilter} setFilter={setGlobalFilter} />
      <div className="table-container">
        <table
          {...getTableProps()}
          className="display table-striped table-bordered nimmu-bordered-table nimmu-basic-table dataTable no-footer dtr-inline collapsed"
          role="grid"
          aria-describedby="custom-datatable_info"
          style={{
            position: "relative",
            maxWidth: "100%",
            tableLayout: "fixed",
          }}
        >
          <thead>
            {headerGroups.map((headerGroup, index) => {
              let type = "all";
              if (index === 2) type = "teblet";
              if (index > 2) type = "desktop sorting_asc";

              return (
                <tr {...headerGroup.getHeaderGroupProps()} role="row">
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      className={
                        type +
                        ` ${
                          column.isSorted
                            ? column.isSortedDesc
                              ? "sorting_desc"
                              : "sorting_asc"
                            : "sorting"
                        }`
                      }
                      tabIndex={0}
                      aria-controls="custom-datatable"
                      rowSpan={1}
                      colSpan={1}
                      style={{ width: 131 }}
                      aria-sort="ascending"
                      aria-label="Name: activate to sort column descending"
                    >
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              );
            })}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, index) => {
              let parity = "odd";
              if ((index + 1) % 2 == 0) parity = "even";
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} role="row" className={parity}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()} className="sorting_1">
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Col sm={12} md={7}>
        <div
          className="dataTables_paginate paging_simple_numbers"
          id="custom-datatable_paginate"
        >
          <Pagination>
            <Pagination.Prev
              disabled={!canPreviousPage}
              id="custom-datatable_previous"
              onClick={() => previousPage()}
            >
              <span style={{ textDecoration: "none" }}>Previous</span>
            </Pagination.Prev>

            {pageIndex + 1 - 3 >= 1 && (
              <Pagination.Item onClick={() => gotoPage(0)}>1</Pagination.Item>
            )}
            {pageIndex + 1 - 2 > 2 && (
              <Pagination.Ellipsis disabled id="custom-datatable_ellipsis" />
            )}
            {pageIndex + 1 - 2 >= 1 && (
              <Pagination.Item onClick={() => gotoPage(pageIndex - 2)}>
                {pageIndex + 1 - 2}
              </Pagination.Item>
            )}
            {pageIndex + 1 - 1 >= 1 && (
              <Pagination.Item onClick={() => gotoPage(pageIndex - 1)}>
                {pageIndex + 1 - 1}
              </Pagination.Item>
            )}
            <Pagination.Item
              active
              aria-current="page"
              onClick={() => gotoPage(pageIndex)}
            >
              {pageIndex + 1}
            </Pagination.Item>
            {pageIndex + 1 + 1 <= pageOptions.length && (
              <Pagination.Item onClick={() => gotoPage(pageIndex + 1)}>
                {pageIndex + 1 + 1}
              </Pagination.Item>
            )}
            {pageIndex + 1 + 2 <= pageOptions.length && (
              <Pagination.Item onClick={() => gotoPage(pageIndex + 2)}>
                {pageIndex + 1 + 2}
              </Pagination.Item>
            )}
            {pageIndex + 1 + 2 <= pageOptions.length - 2 && (
              <Pagination.Ellipsis disabled id="custom-datatable_ellipsis" />
            )}
            {pageIndex + 1 + 3 <= pageOptions.length && (
              <Pagination.Item onClick={() => gotoPage(pageOptions.length)}>
                {pageOptions.length}
              </Pagination.Item>
            )}
            <Pagination.Next
              disabled={!canNextPage}
              id="custom-datatable_next"
              onClick={() => nextPage()}
            >
              <span style={{ textDecoration: "none" }}>Next</span>
            </Pagination.Next>
          </Pagination>
        </div>
      </Col>
    </React.Fragment>
  );
};

export default TableContents;
