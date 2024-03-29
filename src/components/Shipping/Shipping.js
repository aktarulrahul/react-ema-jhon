import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import { clearTheCart, getStoredCart } from '../../utilities/fakedb';
import './Shipping.css';

const Shipping = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { user } = useAuth();

  const onSubmit = (data) => {
    const savedCart = getStoredCart();
    data.order = savedCart;
    fetch('https://aktarulrahul-ema-jhon.herokuapp.com/orders', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert('Order processed Successfully');
          clearTheCart();
          reset();
        }
      });
  };
  return (
    <div>
      <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue={user.displayName} {...register('name')} />
        <input
          defaultValue={user.email}
          {...register('email', { required: true })}
        />
        {errors.email && <span className="error">This field is required</span>}
        <input defaultValue="Dhaka" {...register('address')} />
        <input defaultValue="+880" {...register('phone')} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Shipping;
