import React from 'react';
import ProductCard from './ProductCard';
import './App.css';

function App() {
  // Sample product data demonstrating prop usage
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
      description: "Premium noise-cancelling wireless headphones with 30-hour battery life and crystal clear sound.",
      inStock: true,
      category: "Electronics",
      rating: 4.5
    },
    {
      id: 2,
      name: "Smart Watch Pro",
      price: 299.99,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
      description: "Advanced fitness tracking, heart rate monitoring, and seamless smartphone integration.",
      inStock: true,
      category: "Wearables",
      rating: 4.8
    },
    {
      id: 3,
      name: "Laptop Stand",
      price: 45.99,
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop",
      description: "Ergonomic aluminum laptop stand with adjustable height and cooling ventilation.",
      inStock: false,
      category: "Accessories",
      rating: 4.2
    }
  ];

  return (
    <div className="app">
      <header className="app-header">
        <h1>Product Catalog</h1>
        <p>Reusable ProductCard Component - React Props Demo</p>
      </header>
      
      <main className="product-grid">
        {products.map(product => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            description={product.description}
            inStock={product.inStock}
            category={product.category}
            rating={product.rating}
          />
        ))}
      </main>
      
      <footer className="app-footer">
        <p>Course Outcome: CO1 & CO2 - React Component Development</p>
      </footer>
    </div>
  );
}

export default App;
