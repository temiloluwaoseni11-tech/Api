import React from "react";

function Filter({ filterTitle, setFilterTitle, filterRate, setFilterRate }) {
  return (
    <div style={{ margin: "20px 0" }}>
      <input
        type="text"
        placeholder="Filter by title"
        value={filterTitle}
        onChange={(e) => setFilterTitle(e.target.value)}
        style={{ marginRight: "10px" }}
      />
      <input
        type="number"
        placeholder="Filter by rating"
        value={filterRate}
        onChange={(e) => setFilterRate(e.target.value)}
        min="0"
        max="5"
      />
    </div>
  );
}

export default Filter;