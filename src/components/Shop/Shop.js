import React, { useState, useEffect } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON'
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="shop-container">
      <div></div>
      <div className="product-container">
        {products.map((product) => (
          <Product key={product.key} product={product} />
        ))}
      </div>
      <div className="cart-container">
        <h3>Order Summary</h3>
        <h5>Items Order</h5>
      </div>
    </div>
  );
};

export default Shop;
