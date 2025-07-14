const express = require("express")
const router = express.Router()
const bookController = require("../controllers/book")

router.get('/books',bookController.handlegetAllBooks);// get all books
router.get('/books/:bookId',bookController.handelgetBookBYId);// get book by ID
router.post('/book',bookController.handleCreateNewBook);// create a new book
router.delete('/book/:bookid',bookController.handleDeleteBookById);// delete a book by ID

module.exports= router;