import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      'mongodb+srv://satakshishanvi:YVi595egK2DVDpZL@cluster0.qhyducy.mongodb.net/food-delivery'
    )
    .then(() => console.log("DB Connected"));
};