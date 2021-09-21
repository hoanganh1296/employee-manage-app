const express = require('express');
const mongoose = require('mongoose');
const app = express();

require('dotenv/config');


app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//Import Routes
const postsRoute = require('./routes/posts')


app.use('/posts', postsRoute);


//Routes
app.get('/', (req, res) => {
    res.send('We are on home')
});


//Connect to DB
mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    () => {
        console.log('connected to DB!')
    })

//How to we start listening to the server
app.listen(3000);