import React from 'react'

export const ColumnFilter = ({column}) => {
    const {filterValue, setFilter} = column
    return (
        <span className="filter">
        {" "}
        <input
          className="filterInput"
          value={filterValue || ""}
          onChange={(e) => setFilter(e.target.value)}
          placeholder = "Search here"
        />
      </span>
    )
}
