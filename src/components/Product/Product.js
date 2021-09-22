import React from 'react';
import './Product.css';

const Product = (props) => {
  const { name, price, img, stock, seller, features } = props.product;
  return (
    <div className="product">
      <div className="product-img">
        <img src={img} alt={name} />
      </div>
      <div className="product-info">
        <h4 className="product-name">{name}</h4>
        <p className="product-seller">
          <small>by: {seller}</small>
        </p>
        <div className="product-flex-box">
          <div className="product-info-left">
            <p className="product-price">${price}</p>
            <p className="product-stock">
              <small>only {stock} left in stock - order soon</small>
            </p>
            <button className="btn-product">Add to Cart</button>
          </div>
          <div className="product-info-right">
            <div>Rating</div>
            <h4>Features</h4>
            <ul className="product-features-list">
              {features.map((feature) => (
                <li>
                  <small>
                    {feature.description}: <strong>{feature.value}</strong>
                  </small>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
