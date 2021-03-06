'use strict';
import express, { json } from 'express';
import mysql from 'mysql2';
import fs from 'fs';
import cors from 'cors';


const app = express();
const PORT = 3000;
const pw = fs.readFileSync('pw.txt', 'utf-8');
app.use(json());
app.use(cors());
const timestamp = Math.floor(Date.now() / 1000);

app.get('/hello', (req, res) => res.send('hello world'))

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: `${pw}`,
    database: 'reddit'
})

function sendError(err, res) {
    console.log(err);
    res.sendStatus(500);
}

conn.connect((err) => {
    if (err) {
        console.error('Cannot connect to database,', err);
        return;
    }
    console.log('MySQL connection is as strong as a badger');
})

app.get('/posts', (req, res) => {

    conn.query(`SELECT * FROM reddit.posts;`, (err, posts) => {
        if (err) {
            sendError(err, res);
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
            sendError(err, res);
        }
        newPost.id = result.insertId;
        res.status(200).json(newPost);
    })

})

app.put('/posts/:id/upvote', (req, res) => {
    const upvotedPostId = req.params.id;

    conn.query(`UPDATE posts SET score = score +1 WHERE (id = ${upvotedPostId});`, (err) => {
        if (err) {
            sendError(err, res);
        }
    });

    conn.query(`SELECT * FROM posts WHERE id = ${upvotedPostId};`, (err, result) => {
        if (err) {
            sendError(err, res);
        }
        res.status(200).json(result[0])
    })

})

app.put('/posts/:id/downvote', (req, res) => {
    const downvotedPostId = req.params.id;

    conn.query(`UPDATE posts SET score = score -1 WHERE (id = ${downvotedPostId});`, (err) => {
        if (err) {
            sendError(err, res);
        }
    });

    conn.query(`SELECT * FROM posts WHERE id = ${downvotedPostId};`, (err, result) => {
        if (err) {
            sendError(err, res);
        }
        res.status(200).json(result[0])
    })

})

app.put('/posts/:id', (req, res) => {
    const modifiedPost = {
        id: req.params.id,
        ...req.body
    };

    if (modifiedPost.title !== undefined) {
        conn.query(`UPDATE posts SET title = '${modifiedPost.title}' WHERE (id = ${modifiedPost.id});`, (err) => {
            if (err) {
                sendError(err, res);
            }
        });
    }

    if (modifiedPost.url !== undefined) {
        conn.query(`UPDATE posts SET url = '${modifiedPost.url}' WHERE (id = ${modifiedPost.id});`, (err) => {
            if (err) {
                sendError(err, res);
            }
        });
    }

    conn.query(`SELECT * FROM posts WHERE id = ${modifiedPost.id};`, (err, result) => {
        if (err) {
            sendError(err, res);
        }
        res.status(200).json(result[0])
    })

})

app.delete('/posts/:id', (req, res) => {
    const deletedPost = {
        id: req.params.id
    }

    conn.query(`SELECT * FROM posts WHERE id = ${deletedPost.id};`, (err, result) => {
        if (err) {
            sendError(err, res);
        }
        deletedPost.title = result[0].title;
        deletedPost.url = result[0].url;
        deletedPost.timestamp = result[0].timestamp;
        deletedPost.score = result[0].score;
    })

    conn.query(`DELETE from posts WHERE id = ${deletedPost.id};`, (err) => {
        if (err) {
            sendError(err, res);
        }
        res.status(200).json(deletedPost);
    })

})

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));