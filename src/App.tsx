import React from 'react';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';

const App: React.FC = () => {
  return (
    <div className="flex justify-between p-4">
      <ProductList />
      <ShoppingCart />
    </div>
  );
};

export default App;
