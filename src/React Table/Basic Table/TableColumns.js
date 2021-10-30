
import { ColumnFilter } from "../Filtering Table/ColumnFilter"; // this component import here for column filtering

export const COLUMNS = [
  {
    Header: "Id",
    Footer: "Id" /*FOOTER FOR COLUMNS HEAD IN FOOTER*/,
    accessor: "id",
    Filter: ColumnFilter,   // this component import here for column filtering
  },
  {
    Header: "First Name",
    Footer: "First Name",
    accessor: "first_name",
    Filter: ColumnFilter,
    disableFilters: true //// this is used to unable filtering column 

  },
  {
    Header: "Last Name",
    Footer: "Last Name",
    accessor: "last_name",
    Filter: ColumnFilter,
    disableFilters: true  
  },
  {
    Header: "Email",
    Footer: "Email",
    accessor: "email",
    Filter: ColumnFilter,
    disableFilters: true  
  },
  {
    Header: "Date of Birth",
    Footer: "Date of Birth",
    accessor: "date",
    Filter: ColumnFilter,
    disableFilters: true  
  },
  {
    Header: "Age",
    Footer: "Age",
    accessor: "age",
    Filter: ColumnFilter,
    disableFilters: true  
  },
  {
    Header: "Country",
    Footer: "Country",
    accessor: "country",
    Filter: ColumnFilter,
    disableFilters: true  
  },
  {
    Header: "Phone",
    Footer: "Phone",
    accessor: "phone",
    Filter: ColumnFilter,
    disableFilters: true  
  },
];



export const GROUPED_COLUMNS = [       // This section for grouping column (if nedded)
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id",
  },
  {
    Header: "Name",
    Footer: "Name",
    columns: [
      {
        Header: "First Name",
        Footer: "First Name",
        accessor: "first_name",
      },
      {
        Header: "Last Name",
        Footer: "Last Name",
        accessor: "last_name",
      },
    ],
  },
  {
    Header: "Info",
    Footer: "Info",
    columns: [
      {
        Header: "Email",
        Footer: "Email",
        accessor: "email",
      },
      {
        Header: "Date of Birth",
        Footer: "Date of Birth",
        accessor: "date",
      },
      {
        Header: "Age",
        Footer: "Age",
        accessor: "age",
      },
      {
        Header: "Country",
        Footer: "Country",
        accessor: "country",
      },
      {
        Header: "Phone",
        Footer: "Phone",
        accessor: "phone",
      },
    ],
  },
];
