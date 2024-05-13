import React from 'react';

const ListItem = ({ item, onItemSelect }) => {
  return (
    <div>
      <span>{item.name}</span>
      <button onClick={() => onItemSelect(item)}>Select</button>
    </div>
  );
};

export default ListItem;