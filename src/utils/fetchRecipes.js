import axios from 'axios';

export const fetchRecipes = async (query = '') => {
  const baseURL = process.env.NEXT_PUBLIC_MEALDB_API_URL;
  const res = await axios.get(`${baseURL}search.php?s=${query}`);
  return res.data.meals || [];
};
