import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    fetch(
      `https://aktarulrahul-ema-jhon.herokuapp.com/orders?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  return (
    <div>
      <h2>Total Orders placed: {orders.length}</h2>
      <ul>
        {orders.map((order) => (
          <li key={order._id}>
            {order.name}: {order.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Orders;
