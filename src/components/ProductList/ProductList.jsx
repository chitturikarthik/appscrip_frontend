import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../ProductCard/ProductCard';
import ProductFilter from '../ProductFilter/ProductFilter';
import './ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(10); // Initial count for visible products
  const [sortType, setSortType] = useState('default');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
        setFilteredProducts(response.data); // By default, no filtering is applied
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    let sortedProducts = [...products];

    // Sort based on the sortType selected
    if (sortType === 'low-to-high') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortType === 'high-to-low') {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (sortType === 'alphabetical') {
      sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
    }

    setFilteredProducts(sortedProducts); // Update the filtered products after sorting
  }, [sortType, products]);

  // Load More function
  const handleLoadMore = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 10); // Load 10 more products each time
  };

  const handleSort = (sortValue) => {
    setSortType(sortValue);
  };

  return (
    <div className="product-list">
      <ProductFilter handleSort={handleSort} />

      <div className="products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.slice(0, visibleProducts).map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>

      {visibleProducts < filteredProducts.length && (
        <button className="load-more-button" onClick={handleLoadMore}>
          Load More
        </button>
      )}
    </div>
  );
};

export default ProductList;
