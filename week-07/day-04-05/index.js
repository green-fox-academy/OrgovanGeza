'use strict';
import express, { json } from 'express';
import mysql from 'mysql2';
import fs from 'fs';

const app = express();
const PORT = 3000;
const pw = fs.readFileSync('pw.txt', 'utf-8');
app.use(json());
const timestamp = Math.floor(Date.now() / 1000);

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

function response(responseQuery, res) {
    conn.query(responseQuery, (err, posts) => {
        if (err) {
            console.log(err);
            res.send(500);
        }
        res.status(200).json({ posts });
    })
}

app.get('/posts', (req, res) => {
    response(`SELECT * FROM reddit.posts;`, res);
})

app.post('/posts', (req, res) => {
    const newPost = req.body;

    conn.query(`INSERT INTO posts (title, url, timestamp) 
               VALUES (?,?,?);`, [`${newPost.title}`, `${newPost.url}`, `${timestamp}`], (err, result) => {
        if (err) {
            console.log(err);
            res.send(500);
        }

        const newPostDetails = result.insertId;

        conn.query(`SELECT * FROM reddit.posts WHERE id = ${newPostDetails} ;`, (err, newresult) => {
            if (err) {
                console.log(err);
                res.send(500);
            }
            res.status(200).json( newresult[0] );
        });
       
    })

})

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));