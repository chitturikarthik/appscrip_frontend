import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../ProductCard/ProductCard';
import ProductFilter from '../ProductFilter/ProductFilter';
import './ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortType, setSortType] = useState('default');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
        setFilteredProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  // Sort products based on sortType
  useEffect(() => {
    let sortedProducts = [...products];

    if (sortType === 'low-to-high') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortType === 'high-to-low') {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (sortType === 'alphabetical') {
      sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
    }

    setFilteredProducts(sortedProducts);
  }, [sortType, products]);

  const handleSort = (sortValue) => {
    setSortType(sortValue);
  };

  return (
    <div className="product-list">
      <h1>DISCOVER OUR PRODUCTS</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <ProductFilter handleSort={handleSort} />

      <div className="products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
