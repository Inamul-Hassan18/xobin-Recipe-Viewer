

import { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';

export default function RecipeCard({ recipe }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const addToFavorites = async (e) => {
    e.preventDefault(); // Prevent navigation when clicking the button
    try {
      await axios.post('/api/favorites', {
        recipeId: recipe.idMeal,
        recipeName: recipe.strMeal,
        imageUrl: recipe.strMealThumb
      });
      setIsFavorite(true);
    } catch (error) {
      console.error('Error adding to favorites:', error);
    }
  };

  return (
    <div className="card border rounded shadow p-4 hover:shadow-lg">
      <Link href={`/recipe/${recipe.idMeal}`}>
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="w-full h-48 object-cover rounded"
        />
        <h3 className="text-lg font-semibold mt-2">{recipe.strMeal}</h3>
      </Link>
      <button
        onClick={addToFavorites}
        className={`mt-2 px-4 py-2 rounded ${
          isFavorite ? 'bg-green-500' : 'bg-blue-500'
        } text-white`}
      >
        {isFavorite ? 'Added to Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
}


