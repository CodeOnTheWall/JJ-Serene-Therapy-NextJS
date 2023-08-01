import mongoose from "mongoose";

let isConnected = false;

export default async function connectToDB() {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected");
    // stop the connection if already connected
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
