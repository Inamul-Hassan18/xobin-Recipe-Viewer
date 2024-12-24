import mongoose from 'mongoose';

const favoriteSchema = new mongoose.Schema({
  recipeId: String,
  recipeName: String,
  imageUrl: String,
});

const Favorite = mongoose.models.Favorite || mongoose.model('Favorite', favoriteSchema);

export default async function handler(req, res) {
  await mongoose.connect(process.env.MONGODB_URI);
  const { method } = req;
  
  switch (method) {
    case 'GET':
      const favorites = await Favorite.find({});
      res.status(200).json(favorites);
      break;
    case 'POST':
      const favorite = await Favorite.create(req.body);
      res.status(201).json(favorite);
      break;
    case 'DELETE':
      await Favorite.findByIdAndDelete(req.query.id);
      res.status(204).end();
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}


