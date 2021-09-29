const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://localhost/AlienDBex';


const app = express();

mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;
con.on('open', () => {
    console.log("Connected with database");
});

app.use(express.json());

const alienRouter = require('./routes/aliens');
app.use('/aliens', alienRouter);

app.listen(3000, () => {
    console.log('Server started on ' + 3000);
});