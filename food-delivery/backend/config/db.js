import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://butnariudiana76:pentruproiecte@cluster0.gogq2s9.mongodb.net/food-delivery').then(()=>console.log("DB Connected"))
}
