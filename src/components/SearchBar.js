// components/SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [ingredients, setIngredients] = useState('');

  const handleSearch = () => {
    if (!ingredients.trim()) {
      alert('Please enter some ingredients!');
      return;
    }
    onSearch(ingredients);
    setIngredients('');
  };

  return (
    <div>
      <input
        type="text"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        placeholder="Enter ingredients (e.g., chicken, rice)"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
