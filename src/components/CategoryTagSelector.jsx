import React from 'react';

const CategoryTagSelector = ({ categories, selectedCategory, setCategory }) => {
  return (
    <div className="category-selector">
      <select
        value={selectedCategory}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">All Categories</option>
        {categories.map((cat, index) => (
          <option key={index} value={cat}>{cat}</option>
        ))}
      </select>
    </div>
  );
};

export default CategoryTagSelector;
