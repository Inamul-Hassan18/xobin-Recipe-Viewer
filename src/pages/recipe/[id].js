import axios from 'axios';

export async function getServerSideProps(context) {
  const { id } = context.params;
  const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  return { props: { recipe: res.data.meals[0] } };
}

export default function Recipe({ recipe }) {
  return (
    <div>
      <h1>{recipe.strMeal}</h1>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <h2>Ingredients:</h2>
      <ul>
        {Object.keys(recipe)
          .filter((key) => key.includes('Ingredient') && recipe[key])
          .map((key) => (
            <li key={key}>{recipe[key]}</li>
          ))}
      </ul>
      <p>{recipe.strInstructions}</p>
    </div>
  );
}
