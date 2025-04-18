import React from 'react';

const FilterSortBar = ({ filter, setFilter, sortOrder, setSortOrder }) => {
  return (
    <div className="filter-sort-bar">
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="all">All Tasks</option>
        <option value="completed">Completed</option>
        <option value="active">Active</option>
      </select>

      <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
        <option value="newest">Newest First</option>
        <option value="oldest">Oldest First</option>
      </select>
    </div>
  );
};

export default FilterSortBar;
