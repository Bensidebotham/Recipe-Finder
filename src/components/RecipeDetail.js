// components/RecipeDetail.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams(); // Get the recipe ID from URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipeDetail = async () => {
      try {
        const response = await axios.get(`https://api.edamam.com/search?r=${id}&app_id=YOUR_APP_ID&app_key=ad6f7897f37f625ca06c8dd98aee1ad4`);
        setRecipe(response.data.hits[0].recipe); // Adjust based on API response structure
      } catch (error) {
        console.error("Error fetching recipe details:", error);
      }
    };
    fetchRecipeDetail();
  }, [id]);

  if (!recipe) return <p>Loading...</p>;

  return (
    <div className="recipe-detail-container"> {/* New class added */}
      <h2>{recipe.label}</h2>
      <img src={recipe.image} alt={recipe.label} style={{ width: '300px', height: '300px', borderRadius: '5px' }} />
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredientLines.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <p>
        <a href={recipe.url} target="_blank" rel="noopener noreferrer">View Full Recipe</a>
      </p>
    </div>
  );
};

export default RecipeDetail;
