import React, { useState } from 'react';
import TotalPrice from './components/TotalPrice';
import ItemList from './components/ItemList';
const App = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [items, setItems] = useState([{ name: '사과', count: 2, price: 1000 }]);
  return (
    <>
      <TotalPrice totalPrice={totalPrice} />
      <ItemList items={items} />
    </>
  );
};

export default App;
