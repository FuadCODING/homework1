
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const OrderList = () => {
  const orders = useSelector((state) => state.orders.orders);
  const dispatch = useDispatch();

  const handleRemoveOrder = (id) => {
    dispatch({
      type: 'REMOVE_ORDER',
      payload: id,
    });
  };

  return (
    <div>
      <h2>Order List</h2>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            {order.name} - {order.quantity} pcs
            <button onClick={() => handleRemoveOrder(order.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;
