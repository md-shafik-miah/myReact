import React, { useMemo } from "react"; // this component for sorting table
import { COLUMNS, GROUPED_COLUMNS } from "../Basic Table/TableColumns";
import MOCK_DATA from "../MOCK_DATA (2).json";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  useFilters,
  usePagination,
  useColumnOrder
} from "react-table"; // sortting and filtering
import "../Basic Table/Table.css";
import { GlobalFiltering } from "./../Filtering Table/GlobalFiltering";


const PaginationTable = () => {
  const columns = useMemo(() => COLUMNS, []); //from Table column componenet(only for column use COLUMNS variable in this line, if grouping column use GROUPED_COLUMNS)
  const data = useMemo(() => MOCK_DATA, []);

  const tableInstance = useTable(
    {
      columns,
      data,
      // initialState: {pageIndex: 2}  // if starting table specific number of page
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination,
    useColumnOrder
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    state,
    nextPage,
    previousPage,
    canNextPage, // disable button to previous and next
    canPreviousPage,
    pageOptions, // for show number of page
    setGlobalFilter,
    prepareRow,
    gotoPage, // go to last or first page of table
    pageCount, // go to only last page of table
    setPageSize, // show number of row in a page
    setColumnOrder

  } = tableInstance;

  const { globalFilter,pageIndex,pageSize } = state; // distructure state, pageIndex use for showing page number

  const columnOrder = () => {
    setColumnOrder(["id", "first_name", "last_name", "phone", "email", "country","age", "date"]) // column order
  }

  return (
    <>
      <button onClick = {columnOrder}>Column Order</button> {/*change column order*/}

      <GlobalFiltering filter={globalFilter} setFilter={setGlobalFilter} />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <div>{column.canFilter ? column.render("Filter") : null}</div>
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " Z-A 🔽"
                        : " A-Z 🔼"
                      : ""}
                  </span>
                </th> //Table header name
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  ); //Table Row
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="prevNext">
        <span>
          Page {"  "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
          {/* showing page number */}
        </span>
        <span> 
          {/* input page number to find page  */}
          Jump to page:{" "}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const pageNumber = e.target.value
                ? Number(e.target.value) - 1
                : 0;
              gotoPage(pageNumber);
            }}
          />
        </span>
        

        {/* show number of row using this code  */}
        <select value = {pageSize} onChange = {(e)=> setPageSize(Number(e.target.value))}>
          {
            [10, 25, 50].map((pageSize)=>(
              <option key= {pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))
          }
        </select>

        <span>
          <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            {"<<"}
          </button>
          {/* go to first page */}
        </span>

        <button
          style={{
            color: "green",
            marginRight: "5px",
            border: "none",
            outline: "none",
            cursor: " pointer",
            padding: "10px",
            width: "10%",
          }}
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          Previous
        </button>

        <button
          style={{
            color: "green",
            marginRight: "5px",
            border: "none",
            outline: "none",
            cursor: " pointer",
            padding: "10px",
            width: "10%",
          }}
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          Next
        </button>
        <span>
          <button
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            {">>"}
          </button>
          {/* go to last page of table */}
        </span>
      </div>
    </>
  );
};

export default PaginationTable;
