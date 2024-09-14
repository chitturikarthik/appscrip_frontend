import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const limitedTitle = product.title.length > 12 ? product.title.substring(0, 12) : product.title;

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{limitedTitle}</h3>
      <p>{product.price.toFixed(2)} USD</p>
    </div>
  );
};

export default ProductCard;
