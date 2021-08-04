'use strict';

import express, { json } from 'express';
import ejs from 'ejs';
import mysql from 'mysql2';

const app = express();
const PORT = 3000;
app.use(express.json());
app.set('view engine', 'ejs');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'bookstore'
})

conn.connect((err) => {
    if (err) {
        console.error('Cannot connect to the database ', err);
        return;
    }
    console.log('Connection established');
})

app.get('/books', (req, res) => {
    conn.query('SELECT book_name FROM bookstore.book_mast;', (err, result) => {
        if (err) {
            console.log(err);
            res.send(500); // automatically returns
        }
        res.status(200).render('home', { books: result })
        // res.json(result); //if i want to send a json response, without a frontend

    })
})


app.listen(PORT, () => console.log(`Server started on port ${PORT}`))