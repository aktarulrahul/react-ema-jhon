import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { clearTheCart, deleteFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
  const [products] = useProducts();
  const [cart, setCart] = useCart(products);
  const history = useHistory();
  const handleRemove = (key) => {
    const newCart = cart.filter((product) => product.key !== key);
    deleteFromDb(key);
    setCart(newCart);
  };
  const handlePlaceOrder = () => {
    history.push('/shipping');
    // history.push('/placeorder');
    // setCart([]);
    // clearTheCart();
  };
  return (
    <div className="shop-container">
      <div className="product-container">
        {cart.map((product) => (
          <ReviewItem
            key={product.key}
            product={product}
            handleRemove={handleRemove}
          />
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <button onClick={handlePlaceOrder} className="btn-product">
            Proceed to Shipping
          </button>
        </Cart>
      </div>
    </div>
  );
};

export default OrderReview;
