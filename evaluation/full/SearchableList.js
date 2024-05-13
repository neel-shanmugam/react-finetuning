import React from 'react';
import ListItem from './ListItem';

const SearchableList = ({ items, onItemSelect }) => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      {filteredItems.map(item => (
        <ListItem key={item.id} item={item} onItemSelect={onItemSelect} />
      ))}
    </div>
  );
};

export default SearchableList;

