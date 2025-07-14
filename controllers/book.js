const Book = require("../models/book");
let books = [];

// Get all books
 async function handlegetAllBooks(req, res) {
    const bookInDB = await Book.find();//mongoose method to find all books
    return res.render("books",{
        books: bookInDB
    });
}

// Get a book by ID
async function handelgetBookBYId (req,res) {
    const id =req.params.bookId
    const book = await Book.findById(id)//mongoose method to find a book by ID
    return res.json({book})
}

// Create a new book
async function handleCreateNewBook(req,res) {
    const body = req.body;
   await Book.create(body)
    res.json({status: 'success'});
}
// Delete a book by ID
async function handleDeleteBookById (req, res)  {
    const body = req.params.bookid;
    await Book.findByIdAndDelete(body);//mongoose method to delete a book by ID
    return res.json({ status: 'deleted' });
}

module.exports = {
    handlegetAllBooks,
    handelgetBookBYId,
    handleCreateNewBook,
    handleDeleteBookById
}