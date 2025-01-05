
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const OrderForm = () => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleAddOrder = () => {
    dispatch({
      type: 'ADD_ORDER',
      payload: {
        id: Date.now(),
        name,
        quantity,
      },
    });
    setName('');
    setQuantity(1);
  };

  return (
    <div>
      <h2>Add Order</h2>
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        min="1"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      />
      <button onClick={handleAddOrder}>Add Order</button>
    </div>
  );
};

export default OrderForm;
