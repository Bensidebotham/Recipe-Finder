// components/RecipeList.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchRecipes } from '../utils/api.js'; // Import the fetchRecipes function

const RecipeList = ({ ingredients }) => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
  
    useEffect(() => {
      const getRecipes = async () => {
        if (!ingredients) return;
        setLoading(true);
        setError('');
        try {
          const data = await fetchRecipes(ingredients);
  
          // Check if the API response contains recipes
          if (!data || data.length === 0) {
            setError('No recipes found for the given ingredients. Please try different ingredients.');
          } else {
            setRecipes(data);
          }
        } catch (error) {
          setError('Failed to fetch recipes. Please try again later.');
        } finally {
          setLoading(false);
        }
      };
      getRecipes();
    }, [ingredients]);
  
    if (loading) return <p>Loading recipes...</p>;
  
    return (
        <div className="recipe-list-container"> {/* New class added */}
          <h2>Recipes</h2>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <ul>
            {recipes.map((recipe) => (
              <li key={recipe.recipe.uri}>
                <Link to={`/recipe/${recipe.recipe.uri.split('#')[1]}`}>
                  <img src={recipe.recipe.image} alt={recipe.recipe.label} />
                  {recipe.recipe.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      );
    };
  
  export default RecipeList;