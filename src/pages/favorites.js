// import axios from 'axios';

// export async function getServerSideProps() {
//   const res = await axios.get('http://localhost:3000/api/favorites');
//   return { props: { favorites: res.data } };
// }

// export default function Favorites({ favorites }) {
//   const removeFavorite = async (id) => {
//     try {
//       await axios.delete(`/api/favorites?id=${id}`);
//       window.location.reload();
//     } catch (error) {
//       console.error('Failed to remove favorite:', error);
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">My Favorite Recipes</h1>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         {favorites.map((fav) => (
//           <div key={fav._id} className="card border rounded shadow p-4">
//             <img
//               src={fav.imageUrl}
//               alt={fav.recipeName}
//               className="w-full h-48 object-cover rounded"
//             />
//             <h3 className="text-lg font-semibold mt-2">{fav.recipeName}</h3>
//             <button
//               onClick={() => removeFavorite(fav._id)}
//               className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
//             >
//               Remove
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
