const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());


let books = [
    ];

app.get('/books', (req, res) => {
    return res.json({  books });
});

app.get('/books/:bookId',(req,res) =>{
    const id =req.params.bookId
    const book = books.find((e) => e.id === Number(id))
    return res.json({book})
})

app.post('/book',(req,res) =>{
    const body = req.body;
    books.push(body);
    res.json({status: 'success'});
});

 app.delete('/book/:bookid', (req, res) => {
    const body = req.params.bookid;
    books = books.filter((e) => e.id !== Number(body));
    return res.json({ status: 'deleted' });
 });


app.listen(3000,() => {
    console.log('Server Started')
} )
