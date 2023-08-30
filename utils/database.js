import mongoose from "mongoose";

// variable to track connection status
let isConnected = false;

export default async function connectToDB() {
  mongoose.set("strictQuery", true);

  // If the connection is already established, return without creating a new connection.
  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      // the db name/collection name we made
      dbName: "clients",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;
    console.log("MongoDB connected");
  } catch (error) {
    console.log("here", error);
  }
}
