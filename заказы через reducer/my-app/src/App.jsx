
import React from 'react';
import OrderForm from './components/OrderForm';
import OrderList from './components/OrderList';
import OrderSummary from './components/OrderSummary';

const App = () => {
  return (
    <div>
      <h1>Order Management</h1>
      <OrderForm />
      <OrderList />
      <OrderSummary />
    </div>
  );
};

export default App;
