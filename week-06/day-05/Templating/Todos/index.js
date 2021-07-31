import express from 'express';
import ejs from 'ejs';

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.get('/', todo);

function todo(req, res) {
    
}

app.listen(PORT, () => {
    console.log(`Lisening on port ${PORT}`);
})