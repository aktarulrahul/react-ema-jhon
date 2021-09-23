import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
  // console.log(cart);
  let totalQuantity = 0;

  let total = 0;
  for (const product of cart) {
    product.quantity = !product.quantity ? 1 : product.quantity;
    total = total + product.price * product.quantity;
    totalQuantity = totalQuantity + product.quantity;
  }
  const shipping = total > 0 ? 15 : 0;
  const tax = (total + shipping) * 0.1;
  const grandTotal = total + tax + shipping;
  return (
    <div>
      <h3>Order Summary</h3>
      <h5>Items Ordered: {totalQuantity}</h5>
      <br />
      <p>Total: {total.toFixed(2)}</p>
      <p>Shipping: {shipping}</p>
      <p>Tax: {tax.toFixed(2)}</p>
      <p>Grand Total: {grandTotal.toFixed(2)}</p>
    </div>
  );
};

export default Cart;
