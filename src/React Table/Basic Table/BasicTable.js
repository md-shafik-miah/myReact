import React, { useMemo } from "react";                       // this component for a simple table
import {COLUMNS, GROUPED_COLUMNS} from "./TableColumns";
import MOCK_DATA from "../MOCK_DATA (2).json";
import { useTable } from "react-table";           //install react-table package
import "../Basic Table/Table.css";

const BasicTable = () => {
  const columns = useMemo(() => COLUMNS, []);   //from Table column componenet(only for column use COLUMNS variable in this line, if grouping column use GROUPED_COLUMNS)
  const data = useMemo(() => MOCK_DATA, []);

  const tableInstance = useTable({
    columns,
    data,
  });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    footerGroups,
  } = tableInstance;

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>    //Table header name 
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
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;    //Table Row
              })}
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        {footerGroups.map((footerGroup) => (
          <tr {...footerGroup.getFooterGroupProps()}>
            {footerGroup.headers.map((column) => (
              <th {...column.getFooterProps()}>{column.render("Footer")}</th>    //Table Footer 
            ))}
          </tr>
        ))}
      </tfoot>
    </table>
  );
};

export default BasicTable;
