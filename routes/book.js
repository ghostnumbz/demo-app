const express = require("express")
const router = express.Router()
const bookController = require("../controllers/book")

router.get('/books',bookController.handlegetAllBooks);
router.get('/books/:bookId',bookController.handelgetBookBYId);
router.post('/book',bookController.handleCreateNewBook);
router.delete('/book/:bookid',bookController.handleDeleteBookById);

module.exports= router;