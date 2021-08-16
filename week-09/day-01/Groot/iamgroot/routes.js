import express from 'express'
export const app = express();

app.get('/groot', (req, res) => {
    if (req.query.message) {
        const response = {
            'recieved': req.query.message,
            'translated': "I am Groot!"
        }

        res.status(200).json(response);
    } else {
        const noQueryRes = {
            'error': "I am Groot!"
        }

        res.status(200).json(noQueryRes);
    }

});