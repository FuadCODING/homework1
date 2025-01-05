
import React from 'react';
import { useSelector } from 'react-redux';

const OrderSummary = () => {
  const orders = useSelector((state) => state.orders.orders);

  const totalItems = orders.reduce((total, order) => total + order.quantity, 0);

  return (
    <div>
      <h2>Order Summary</h2>
      <p>Total Items: {totalItems}</p>
    </div>
  );
};

export default OrderSummary;
