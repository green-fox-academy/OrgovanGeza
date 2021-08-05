'use strict';
import express, { json } from 'express';
import mysql from 'mysql2';
import fs from 'fs';

const app = express();
const PORT = 3000;
const pw = fs.readFileSync('pw.txt', 'utf-8');
app.use(json());

app.get('/hello', (req, res) => res.send('hello world'))

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: `${pw}`,
    database: 'reddit'
})

conn.connect((err) => {
    if (err) {
        console.error('Cannot connect to database,', err);
        return;
    }
    console.log('Connection is as strong as a badger');
})

app.get('/posts', (req, res) => {
    conn.query(`SELECT * FROM reddit.posts;`, (err, posts) => {
        if (err){
            console.log(err);
            res.send(500);
        }
        res.status(200).json({posts});
    })
})

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));