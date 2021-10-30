import React, { useMemo } from "react"; // this component for sorting table
import { COLUMNS, GROUPED_COLUMNS } from "../Basic Table/TableColumns";
import MOCK_DATA from "../MOCK_DATA (2).json";
import { useTable, useSortBy, useGlobalFilter, useFilters } from "react-table";  // sortting and filtering
import "../Basic Table/Table.css";
import { GlobalFiltering } from "./GlobalFiltering";

const FilteringTable = () => {
  const columns = useMemo(() => COLUMNS, []); //from Table column componenet(only for column use COLUMNS variable in this line, if grouping column use GROUPED_COLUMNS)
  const data = useMemo(() => MOCK_DATA, []);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useFilters,useGlobalFilter, useSortBy
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    state,
    setGlobalFilter,
    prepareRow,
  } = tableInstance;

  const { globalFilter } = state;

  return (
    <>
       <GlobalFiltering  filter = {globalFilter} setFilter={setGlobalFilter} /> 
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <div>{column.canFilter? column.render('Filter'): null}</div>
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
          {rows.map((row) => {
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
    </>
  );
};

export default FilteringTable;
