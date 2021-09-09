'use strict';

import express, { json } from 'express';
import mysql from 'mysql2';
import cors from 'cors';

export const app = express();
const PORT = 3000;

app.use(cors());
app.use(json());


const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'trivia'
});

conn.connect((err) => {
    if (err) {
        console.error('Cannot connect to database, ', err);
        return;
    }
    console.log('Database connection established');
})


function sendError(err, res) {
    console.log(err);
    res.sendStatus(500);
};

app.use('/game', express.static('frontend/request-game.html'));
app.use('/questions', express.static('frontend/request-questions.html'));
app.use('/', express.static('frontend'));

app.get('/api/game', (req, res) => {

    conn.query(`SELECT id FROM questions;`, (err, qAmount) => {
        if (err) {
            sendError(err, res);
        }
        const questionIds = qAmount.map(e => e.id)
        console.log(questionIds);

        const rnd = Math.floor(Math.random() * questionIds.length);
        console.log(rnd);

        conn.query(`SELECT * FROM questions 
                        INNER JOIN answers
                            ON questions.id=answers.question_id
                        WHERE questions.id=${questionIds[rnd]};`, (err, result) => {
            if (err) {
                sendError(err, res);
            }

            const resObj = {
                id: result[0].question_id,
                question: result[0].question,
                answers: result.map((e, i) => {
                    return {
                        question_id: e.question_id,
                        id: e.id,
                        [`answer_${i + 1}`]: e.answer,
                        is_correct: e.is_correct
                    }
                })
            }

            res.status(200).json(resObj);
        });

    })

})

app.get('/api/questions', (req, res) => {
    conn.query(`SELECT * FROM questions;`, (err, result) => {
        if (err) {
            sendError(err, res);
        }
        res.status(200).json(result);
    })
})

app.post('/api/questions', (req, res) => {
    const newQuestion = {
        ...req.body
    }

    console.log(newQuestion);

    conn.query(`INSERT INTO questions (question)
                VALUES (?);`, [`${newQuestion.question}`], (err, result) => {
        if (err) {
            sendError(err, res);
        }
        newQuestion.id = result.insertId;

        conn.query(`INSERT INTO answers (question_id, answer, is_correct)
        VALUES ?;`, [[
            [newQuestion.id, `${newQuestion.answers[0].answer_1}`, newQuestion.answers[0].is_correct],
            [newQuestion.id, `${newQuestion.answers[1].answer_2}`, newQuestion.answers[1].is_correct],
            [newQuestion.id, `${newQuestion.answers[2].answer_3}`, newQuestion.answers[2].is_correct],
            [newQuestion.id, `${newQuestion.answers[3].answer_4}`, newQuestion.answers[3].is_correct]
        ]], (err) => {
            if (err) {
                sendError(err, res)
            }
        })


    })
})

app.delete('/api/questions/:id', (req, res) => {
    const deleteId = req.params.id;

    conn.query(`DELETE FROM answers WHERE question_id=${deleteId};`, (err) => {
        if (err) {
            sendError(err, res);
        }
        conn.query(`DELETE FROM questions WHERE id=${deleteId};`, (err) => {
            if (err) {
                sendError(err, res);
            }

        })
    })
});

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));