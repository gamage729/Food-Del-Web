import mongoose from "mongoose";

export const connectDB = async ()=> {
    await mongoose.connect('mongodb+srv://danushkavidunath2000:Gamage729@cluster0.mtx3h.mongodb.net/food-del').then (()=>console.log("DB Connected"));

}