import React from 'react';
import './ProductCard.css';

const ProductCard = ({ 
  name, 
  price, 
  image, 
  description, 
  inStock, 
  category,
  rating 
}) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={image} alt={name} className="product-image" />
        <span className={`stock-badge ${inStock ? 'in-stock' : 'out-of-stock'}`}>
          {inStock ? '✓ In Stock' : '✗ Out of Stock'}
        </span>
        {category && <span className="category-badge">{category}</span>}
      </div>
      
      <div className="product-details">
        <h3 className="product-name">{name}</h3>
        <p className="product-description">{description}</p>
        
        <div className="product-footer">
          <div className="price-rating">
            <span className="product-price">${price}</span>
            {rating && (
              <span className="product-rating">
                ⭐ {rating}/5
              </span>
            )}
          </div>
          
          <button 
            className={`add-to-cart-btn ${!inStock ? 'disabled' : ''}`}
            disabled={!inStock}
          >
            {inStock ? 'Add to Cart' : 'Unavailable'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
