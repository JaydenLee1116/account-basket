import React from 'react';

const Item = ({ name, count, price }) => {
  return (
    <div>
      {name} {count}개 {price}원
    </div>
  );
};

export default Item;
