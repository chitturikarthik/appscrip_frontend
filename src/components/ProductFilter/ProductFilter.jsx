import React from 'react';
import './ProductFilter.css';

const ProductFilter = ({ handleSort }) => {
  return (
    <div className="product-filter">
      <label htmlFor="sort">Sort By:</label>
      <select id="sort" onChange={(e) => handleSort(e.target.value)}>
        <option value="default">Default</option>
        <option value="low-to-high">Price: Low to High</option>
        <option value="high-to-low">Price: High to Low</option>
        <option value="alphabetical">Alphabetical</option>
      </select>
    </div>
  );
};

export default ProductFilter;
