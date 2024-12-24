// import axios from 'axios';

// export async function getServerSideProps() {
//   // Fetch data from TheMealDB API
//   const res = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=');
//   const recipes = res.data.meals || []; // Handle cases where the API returns null
//   return { props: { recipes } };
// }

// export default function Home({ recipes }) {
//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Recipes</h1>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         {recipes.map((recipe) => (
//           <div key={recipe.idMeal} className="card border rounded shadow p-4">
//             <img
//               src={recipe.strMealThumb}
//               alt={recipe.strMeal}
//               className="w-full h-48 object-cover rounded"
//             />
//             <h3 className="text-lg font-semibold mt-2">{recipe.strMeal}</h3>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



import axios from "axios";

export async function getServerSideProps() {
  // Fetch data from TheMealDB API
  const res = await axios.get(
    "https://www.themealdb.com/api/json/v1/1/search.php?s="
  );
  const recipes = res.data.meals || []; // Handle cases where the API returns null
  return { props: { recipes } };
}

export default function Home({ recipes }) {
  return (
    <div>
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold mb-4">Welcome to Recipe Haven</h1>
          <p className="text-lg">
            Discover, cook, and enjoy delicious recipes curated just for you.
          </p>
        </div>
      </header>

      {/* Recipe Section */}
      <main className="max-w-7xl mx-auto p-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Explore Our Recipes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <div
              key={recipe.idMeal}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {recipe.strMeal}
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  A delightful dish to satisfy your cravings.
                </p>
                <a
                  href={`/recipe/${recipe.idMeal}`}
                  className="inline-block mt-4 bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-600 transition-all"
                >
                  View Recipe
                </a>
              </div>
            </div> 
          ))}
        </div>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; 2024 Recipe Haven. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}


// export default function Home() {
//   return (
//     <div className="bg-blue-500 text-white text-center p-6">
//       Tailwind CSS is working!
//     </div>
//   );
// }
