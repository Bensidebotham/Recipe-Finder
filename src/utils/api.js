// api.js
import axios from 'axios';

const APP_ID = 'be82eb2f'; // Replace with your Edamam app ID
const APP_KEY = 'ad6f7897f37f625ca06c8dd98aee1ad4'; // Your Edamam API key
const BASE_URL = 'https://api.edamam.com/search';

export const fetchRecipes = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    return response.data.hits; // Adjust based on API response structure
  } catch (error) {
    console.error('Error fetching recipes:', error);
    return [];
  }
};
