import React from 'react';
import Item from './Item';

const ItemList = ({ items }) => {
  return (
    <>
      <div>이름 개수 가격</div>
      {items.map((item, i) => (
        <Item name={item.name} count={item.count} price={item.price} />
      ))}
    </>
  );
};

export default ItemList;
