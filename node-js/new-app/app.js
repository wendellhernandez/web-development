const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

const dbURI = 'mongodb+srv://wendell:test1234@nodepractice.dehtdyg.mongodb.net/node-practice?retryWrites=true&w=majority';

mongoose.connect(dbURI)
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

app.use(express.static('public'));
app.use(morgan('dev'));
app.set('view engine' , 'ejs');

app.get('/' , (req , res) => {
    res.render('index' , {'title' : 'This is Homepage'});
});