// import mongoose from "mongoose";

// const bookSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//         trim: true,
//     },
//     price: {
//         type: Number,
//         required: true,
//         min: 0,
//     },
//     category: {
//         type: String,
//         required: true,
//         trim: true,
//     },
//     title: {
//         type: String,
//         required: true,
//         trim: true,
//     }
// });

// const Book = mongoose.model("Book", bookSchema);

// export default Book;
import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    id: Number,
    name: String,
    title: String,
    price: Number,
    category: String,
    image: String,
  
});
const Books = mongoose.model("Books", bookSchema);

export default Books;