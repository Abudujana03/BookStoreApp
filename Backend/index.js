import express from "express";
import { connect } from "./config/database.js";
import bookRoute from "./route/bookRoute.js";
import userRoute from "./route/userRoute.js";
import cors from 'cors'

const app = express();
app.use(express.json());
//cors middleware
app.use(cors());

// port define
const PORT = process.env.PORT || 4000;
//connecting to the database 
connect();
// defining routes
app.use("/books", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
