
let books = [];

function handlegetAllBooks(req, res) {
    return res.render("books",{
        allBooks: "yash"
    });
}

function handelgetBookBYId (req,res) {
    const id =req.params.bookId
    const book = books.find((e) => e.id === Number(id))
    return res.json({book})
}

function handleCreateNewBook(req,res) {
    const body = req.body;
    books.push(body);
    res.json({status: 'success'});
}

function handleDeleteBookById (req, res)  {
    const body = req.params.bookid;
    books = books.filter((e) => e.id !== Number(body));
    return res.json({ status: 'deleted' });
}

module.exports = {
    handlegetAllBooks,
    handelgetBookBYId,
    handleCreateNewBook,
    handleDeleteBookById
}