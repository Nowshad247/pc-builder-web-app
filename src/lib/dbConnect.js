import { MongoClient, ServerApiVersion } from "mongodb";
const uri = process.env.MONGODB_URI;
export const dbCollections = {
  users: "users",
  products: "products",
  orders: "orders",
  reviews: "reviews",
  cart: "cart",
  wishlist: "wishlist",
  categories: "categories",
  brands: "brands",
  addresses: "addresses",
  paymentMethods: "paymentMethods",
};

function dbConnect(collectionName) {
  const dbclients = {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  };
  client = new MongoClient(uri, dbclients);
  return client.db(process.env.MONGODB_NAME).collection(collectionName);
}
export default dbConnect;
