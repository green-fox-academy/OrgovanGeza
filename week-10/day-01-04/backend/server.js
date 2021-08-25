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

app.get('/playlists', (req, res) => {

    conn.query(`SELECT * FROM playlists;`, (err, playlists) => {
        if (err) res.sendStatus(500);

        res.status(200).json(playlists);
    })
})

app.get('/playlist-tracks/:playlist_id?', (req, res) => {
    let playlistId = req.params.playlist_id;

    if (playlistId === undefined) {
        conn.query(`SELECT * FROM tracks;`, (err, tracks) => {
            if (err) res.sendStatus(500);

            res.status(200).json(tracks);
        })

    } else {
        conn.query(`SELECT * FROM tracks 
                    INNER JOIN playlists ON tracks.playlist_id = playlists.id
                    WHERE tracks.playlist_id = ?;`, [playlistId], (err, rows) => {
            if (err) return res.sendStatus(500);

            if (!rows[0]) return res.status(400).send('No playlist with such id!');

            res.status(200).json(rows);
        })
    }
})

app.post('/playlists', (req, res) => {
    const newPlaylistName = req.body.title;
    console.log(newPlaylistName);

    conn.query(`INSERT INTO playlists (playlist) VALUES (?);`, [newPlaylistName], (err, insertInfo) => {
        if (err) return res.sendStatus(500);
        console.log(insertInfo);

        conn.query(`SELECT * FROM playlists;`, (err, playlists) => {
            if (err) return res.sendStatus(500);
            console.log(playlists);

            res.status(200).json(playlists);
        })
    })
})

app.delete('/playlist/:id?', (req, res) => {
    const deletablePlaylistId = req.params.id;

    if (deletablePlaylistId === undefined) return res.status(400).send('Please provide a playlist id!');

    conn.query(`SELECT * from playlists WHERE id = ${deletablePlaylistId}`, (err, rows) => {
        if (err) return res.sendStatus(500);

        if (!rows[0]) return res.status(400).json({ error: 'No playlist with such id!' });
        if (rows[0].system_rank === 1) return res.status(400).json({ error: 'Cannot delete system playlist!' });

        conn.query(`DELETE FROM playlists WHERE id = ?;`, [deletablePlaylistId], (err) => {
            if (err) return res.sendStatus(500);
            res.sendStatus(200);
        })

    })

})

app.put('/playlist-tracks/:playlist_id/:track_id', (req, res) => {
    const playlistId = req.params.playlist_id;
    const trackId = req.params.track_id;

    conn.query(`UPDATE tracks SET playlist_id = ${playlistId} WHERE (id = ${trackId});`, (err, updateInfo) => {
        if (err) return res.sendStatus(500);
        if (updateInfo.affectedRows === 0) return res.status(400).send('No track with such id!');
        res.sendStatus(200);
    })
})

app.delete('/playlist-tracks', (req, res) => {
    res.status(400).json({ error: 'Please provide /:playlist_id/:track_id !' });
})

app.delete('/playlist-tracks/:playlist_id', (req, res) => {
    res.status(400).json({ error: 'Please provide /:track_id !' });
})

app.delete('/playlist-tracks/:playlist_id/:track_id', (req, res) => {
    const playlistId = req.params.playlist_id;
    const trackId = req.params.track_id;

    conn.query(`UPDATE tracks SET playlist_id = (NULL) WHERE (id = ${trackId});`, (err, updateInfo) => {
        if (err) return res.sendStatus(500);
        if (updateInfo.affectedRows === 0) return res.status(400).send('No track with such id!');
        res.sendStatus(200);
    })
})


app.listen(PORT, () => console.log(`App is running on port ${PORT}`))