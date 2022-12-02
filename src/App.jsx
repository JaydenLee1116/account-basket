import React, { useState } from 'react';
import TotalPrice from './components/TotalPrice';
const App = () => {
  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <>
      <TotalPrice totalPrice={totalPrice} />
    </>
  );
};

export default App;
