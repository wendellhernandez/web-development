const morgan = require('morgan');

const express = require('express');
const app = express();

app.set('view engine' , 'ejs');
app.listen(3000);
app.use(express.static('public'))
app.use(morgan('dev'));

app.get('/' , (req , res) => {
    let contents = [
        {
            'title' : 'Home',
            'message' : 'This is Home'
        },
        {
            'title' : 'About',
            'message' : 'This is About'
        }
    ];

    let data = {
        'title' : 'Home',
        contents
    };

    res.render('index' , data);
});