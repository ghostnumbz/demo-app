const express = require('express');
const bodyParser = require('body-parser');
const{logReqResponseOnConsole}= require("./middlewares/logger")
const app = express();
const bookRouter = require("./routes/book")
const Path = require('path');
const mongoose = require("mongoose");

//connect to mongodb
mongoose.connect("mongodb://localhost:27017/bookify",).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.error("MongoDB connection error:", err);
});

//middlewares
app.use(bodyParser.json());
app.use(logReqResponseOnConsole)

//set engine 
app.set("view engine","ejs");
//set view files
app.set("views",Path.resolve('views'));


//router 
app.use("/",bookRouter);


//listen 
app.listen(3000,() => {
    console.log('Server Started')
} )
