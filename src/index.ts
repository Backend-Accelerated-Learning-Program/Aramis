import * as dotenv from 'dotenv';
import app from "./app";
import mongoose from "mongoose";

dotenv.config({ path: '../.env' })

mongoose.connect(process.env.MONGO_URL!).then(() => {
    console.log('Connected to the database...');
    app.listen(process.env.PORT);
})