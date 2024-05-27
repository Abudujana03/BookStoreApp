// import Book from "../model/bookModel.js";
import Books from '../models/bookModel.js'

export const getBook = async(req, res) => {
    try {
        console.log('data aa rha hai database se intezaar kro')
        const books = await Books.find({});
        // console.log(books)
        console.log('data received in callin api')
        res.status(200).json(books);
    } catch (error) {
        console.log('kooi samasya la ra ai')
        console.log("Error: ", error);
        res.status(500).json(error);
    }
};