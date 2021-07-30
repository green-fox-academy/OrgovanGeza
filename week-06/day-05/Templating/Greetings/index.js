import express from 'express'
import ejs from 'ejs'

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.get('/', greeter);

function greeter(req, res) {
    if (req.query.name !== undefined) {
        res.render('home', {
            title: `Üdv a legjobb honlapon a neten, ${req.query.name}!`
        })
    } else {
        res.render('home', {
            title: 'Üdv a legjobb honlapon a neten, vendég!'
        })
    }
}

app.listen(PORT, () => {
    console.log(`Lisening on port ${PORT}`);
});