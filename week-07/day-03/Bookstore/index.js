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
    conn.query('SELECT book_name FROM bookstore.book_mast;', (err, rows) => {
        if (err) {
            console.log(err);
            res.send(500); // automatically returns
        }
        res.status(200).render('home', { books: rows })
        // res.status(200).json(result); //if i want to send a json response, without a frontend

    })

})

const allBookData = `SELECT book_name, aut_name, cate_descrip, pub_name, book_price 
                    FROM bookstore.book_mast 
                    INNER JOIN author ON bookstore.book_mast.aut_id = bookstore.author.aut_id
                    INNER JOIN category ON bookstore.book_mast.cate_id = bookstore.category.cate_id
                    INNER JOIN publisher ON bookstore.book_mast.pub_id = bookstore.publisher.pub_id`;


app.get('/books/full', (req, res) => {
    const title = req.query.title;
    const author = req.query.author;
    const category = req.query.category;
    const publisher = req.query.publisher;
    const plt = req.query.plt;
    const pgt = req.query.pgt;


    if (category === undefined && publisher === undefined && plt === undefined && pgt === undefined && title === undefined && author === undefined) {
        conn.query(`${allBookData};`, (err, rows) => {
            if (err) {
                console.log(err);
                res.send(500); // automatically returns
            }
            res.status(200).render('homeFull', { fullBooks: rows })
            // res.json(result); //if i want to send a json response, without a frontend
        })
    }

    if (author !== undefined){
        conn.query(`${allBookData}
                    WHERE aut_name LIKE '%${author}%';`, (err, rows) => {
            if (err) {
                console.log(err);
                res.send(500);
            }
            res.status(200).render('homeFull', { fullBooks: rows })
        })
    }

    if (title !== undefined){
        conn.query(`${allBookData}
                    WHERE book_name LIKE '%${title}%';`, (err, rows) => {
            if (err) {
                console.log(err);
                res.send(500);
            }
            res.status(200).render('homeFull', { fullBooks: rows })
        })
    }

    if (category !== undefined){
        conn.query(`${allBookData}
                    WHERE cate_descrip = '${category}';`, (err, rows) => {
            if (err) {
                console.log(err);
                res.send(500);
            }
            res.status(200).render('homeFull', { fullBooks: rows })
        })
    }

    if (publisher !== undefined){
        conn.query(`${allBookData}
                    WHERE pub_name LIKE '%${publisher}%';`, (err, rows) => {
            if (err) {
                console.log(err);
                res.send(500);
            }
            res.status(200).render('homeFull', { fullBooks: rows })
        })
    }

    if (plt !== undefined){
        conn.query(`${allBookData}
                    WHERE book_price < '${plt}';`, (err, rows) => {
            if (err) {
                console.log(err);
                res.send(500);
            }
            res.status(200).render('homeFull', { fullBooks: rows })
        })
    }

    if (pgt !== undefined){
        conn.query(`${allBookData}
                    WHERE book_price > '${pgt}';`, (err, rows) => {
            if (err) {
                console.log(err);
                res.send(500);
            }
            res.status(200).render('homeFull', { fullBooks: rows })
        })
    }

})


app.listen(PORT, () => console.log(`Server started on port ${PORT}`))