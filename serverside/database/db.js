import mongoose from "mongoose";

const Connection = async () => {
  const URL = `mongodb+srv://ayandippaul284:inshortsCloneMongoAtlas@cluster0.a5hxdjb.mongodb.net/inshortsdb?retryWrites=true&w=majority&appName=Cluster0`;

  try {
    await mongoose.connect(URL);
    console.log("✅ Database Connected successfully");
  } catch (error) {
    console.log("❌ Error while connecting with the database", error);
  }
};

export default Connection;
