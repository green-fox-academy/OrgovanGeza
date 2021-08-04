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

    const querryFilters = req.query;

    let filter = Object.keys(querryFilters).length === 0 ? `` : `WHERE `;

    function filterTable(filter) {
        conn.query(`${allBookData} ${filter} `, (err, rows) => {
            if (err) {
                console.log(err);
                res.send(500); // automatically returns
            }
            res.status(200).render('homeFull', { fullBooks: rows })
            // res.json(result); //if i want to send a json response, without a frontend
        })
    }


    if (querryFilters.author !== undefined) {
        filter += ` aut_name LIKE '%${querryFilters.author}%' AND`;
    }

    if (querryFilters.title !== undefined) {
        filter += ` book_name LIKE '%${querryFilters.title}%' AND`;
    }

    if (querryFilters.category !== undefined) {
        filter += ` cate_descrip = '${querryFilters.category}' AND`;
    }

    if (querryFilters.publisher !== undefined) {
        filter += ` pub_name LIKE '%${querryFilters.publisher}%' AND`;
    }

    if (querryFilters.plt !== undefined) {
        filter += ` book_price < '${querryFilters.plt}' AND`;
    }

    if (querryFilters.pgt !== undefined) {
        filter += ` book_price > '${querryFilters.pgt}' AND`;
    }

    filter = filter.slice(0, filter.length-3)
    filter += `;`
    filterTable(filter);
})

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))