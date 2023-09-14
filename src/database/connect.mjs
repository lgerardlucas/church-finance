import mongoose from "mongoose";

const connectBD = async () => {
  const uri = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_DATABASE}.mongodb.net/?retryWrites=true&w=majority`;

  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Database connected.");
  } catch (error) {
    console.error("Error connecting to database:", error);
  }
};

export default connectBD;
