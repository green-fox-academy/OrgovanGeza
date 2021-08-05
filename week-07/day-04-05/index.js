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

function sendError(err) {
    console.log(err);
    res.send(500);
}

conn.connect((err) => {
    if (err) {
        console.error('Cannot connect to database,', err);
        return;
    }
    console.log('Connection is as strong as a badger');
})

app.get('/posts', (req, res) => {

    conn.query(`SELECT * FROM reddit.posts;`, (err, posts) => {
        if (err) {
            sendError(err);
        }
        res.status(200).json({ posts });
    })
})

app.post('/posts', (req, res) => {
    const newPost = {
        ...req.body, // ==> kicsomagol mindent, ami a bodyban van, és felsorolja ide. Mivel a bodyban egy JSON van a szükséges kulcs-érték párokkal, ezért ez pont jó
        timestamp
    }

    conn.query(`INSERT INTO posts (title, url, timestamp) 
               VALUES (?,?,?);`, [`${newPost.title}`, `${newPost.url}`, `${newPost.timestamp}`], (err, result) => {
        if (err) {
            sendError(err);
        }
        newPost.id = result.insertId;
        res.status(200).json(newPost);
    })

})

app.put('/posts/:id/upvote', (req, res) => {
    const upvotedPostId = req.params.id;

    conn.query(`UPDATE posts SET score = score +1 WHERE (id = ${upvotedPostId});`, (err) => {
        if (err) {
            sendError(err);
        }
    });

    conn.query(`SELECT * FROM posts WHERE id = ${upvotedPostId};`, (err, result) => {
        if (err) {
            sendError(err);
        }
        res.status(200).json(result[0])
    })

})

app.put('/posts/:id/downvote', (req, res) => {
    const downvotedPostId = req.params.id;

    conn.query(`UPDATE posts SET score = score -1 WHERE (id = ${downvotedPostId});`, (err) => {
        if (err) {
            sendError(err);
        }
    });

    conn.query(`SELECT * FROM posts WHERE id = ${downvotedPostId};`, (err, result) => {
        if (err) {
            sendError(err);
        }
        res.status(200).json(result[0])
    })

})

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));