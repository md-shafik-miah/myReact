import React from "react";

export const GlobalFiltering = ({ filter, setFilter }) => {
  // this component is used for filtering input box
  return (
    <span className="filter">
      {" "}
      <input
        className="filterInput"
        value={filter || ""}
        onChange={(e) => setFilter(e.target.value)}
        placeholder = "Search here"
      />
    </span>
  );
};
