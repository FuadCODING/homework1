import React, { useState } from "react";

const BagComponent = () => {
  const [bag, setBag] = useState([]);

  const handleAddToBag = () => {
    const newItem = {
      id: Date.now(),
      name: `Item ${bag.length + 1}`,
      price: (Math.random() * 100).toFixed(2),
    };
    setBag([...bag, newItem]);
  };

  const handleRemoveFromBag = (itemId) => {
    setBag(bag.filter((item) => item.id !== itemId));
  };

  return (
    <div>
      <h1>Shopping Bag</h1>
      <button onClick={handleAddToBag}>Add Random Item</button>
      <ul>
        {bag.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => handleRemoveFromBag(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BagComponent;
