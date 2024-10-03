// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import './styles/App.css'; // Ensure your CSS is imported for styling

const App = () => {
  const [ingredients, setIngredients] = useState('');
  
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Recipe Finder</h1>
          <SearchBar onSearch={setIngredients} />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<RecipeList ingredients={ingredients} />} />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
