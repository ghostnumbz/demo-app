const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    bookName:{
        type: String,
        required: true
    },
    isbn:{
        type: Number,
        required: true
    },
    authorName:{
        type: String,
        
    },
    price:{
        type: Number,
        required: true
    }
});
  
const Book = mongoose.model("Book", bookSchema);
    module.exports = Book;