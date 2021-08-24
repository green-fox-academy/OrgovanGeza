'use strict';

import express from 'express';
import cors from 'cors';
import mysql from 'mysql2';
import path from 'path';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());
app.use('/', express.static('frontend'))

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',  //password
    database: 'url_aliaser'
})

conn.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Connected to database');
    }

})

const __dirname = path.resolve();

app.get('/', (req, res)=>{
    res.status(200).sendFile(__dirname + '/frontend/index.html')
})

app.post('/api/links', (req, res) => {
    const alias = req.body.alias;
    const url = req.body.url;

    conn.query(`SELECT * FROM links WHERE alias = ?`, [alias], (err, rows) => {
        if (err) res.sendStatus(500);

        if (rows.length === 1) {
            res.sendStatus(400);
        } else {
            const secretCode = Math.floor(Math.random() * (10000 - 1000) + 1000)
            const insertQuery = `INSERT INTO links (url, alias, hitCount, secretCode) 
                                VALUES (?,?,?,?)`
            conn.query(insertQuery, [url, alias, 0, secretCode], (err, insertInfo) => {
                if (err) res.sendStatus(500);

                res.status(200).json({
                    id: insertInfo.insertId,
                    url: url,
                    alias: alias,
                    hitCount: 0,
                    secretCode: secretCode
                });
            })
        }
    })
})

app.get('/a/:alias', (req, res) => {
    const alias = req.params.alias;

    conn.query(`SELECT * FROM links WHERE alias = ?`, [alias], (err, rows) => {
        if (err) res.sendStatus(500);

        if (rows.length === 1) {
            conn.query(`UPDATE links SET hitCount = hitCount + 1 WHERE alias = ?`, [alias], (err, updateInfo) => {
                if (err) res.sendStatus(500);
                res.redirect(rows[0].url);
            })

        } else {
            res.sendStatus(404);
        }
    })
})

app.get('/api/links', (req, res) => {
    conn.query(`SELECT id, url, alias, hitCount FROM links`, (err, rows) => {
        if (err) res.sendStatus(500);

        res.status(200).json(rows);
    })
})

app.delete('/api/links/:id', (req, res) => {
    const id = req.params.id;
    const secretCodeFromBody = req.body.secretCode;

    conn.query(`SELECT * FROM links WHERE id = ?`, [id], (err, rows) => {
        if (err) res.sendStatus(500);

        if (rows.length === 1) {
            if (secretCodeFromBody === rows[0].secretCode) {
                conn.query(`DELETE FROM links WHERE id = ?`, [id], (err, deleteInfo) => {
                    if (err) res.sendStatus(500);
                    res.sendStatus(204);
                })
            }else{
                res.sendStatus(403);
            }
        } else {
            res.sendStatus(404);
        }
    })
})


app.listen(PORT, () => console.log('Listening'));