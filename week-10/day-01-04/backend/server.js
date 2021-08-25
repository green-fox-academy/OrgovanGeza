'use strict';

import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';
import path from 'path';

const app = express();
const PORT = 3000;
app.use(express.json());
app.use(cors());

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'music_player'
})

conn.connect(err => err ? console.log(err) : console.log('Database connection successful.'));

app.listen(PORT, () => console.log(`App is running on port ${PORT}`))