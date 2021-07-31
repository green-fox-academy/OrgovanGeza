import express from 'express';
import ejs from 'ejs';

const app = express();
const PORT = 3000;
const todos = ['get up', 'survive', 'go back to bed'];

app.set('view engine', 'ejs');

app.get('/', todo);

function todo(req, res) {
    res.render('home', {todos})
}

app.listen(PORT, () => {
    console.log(`Lisening on port ${PORT}`);
})