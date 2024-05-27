import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Export a function to connect to the database
export const connect = () => {
    mongoose.connect(process.env.MongoDBURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("DB connection successful conratulations");
    })
    .catch((err) => {
        console.error("DB connection issues");
        console.error(err);
        process.exit(1); // Exit the process with failure
    });
};
