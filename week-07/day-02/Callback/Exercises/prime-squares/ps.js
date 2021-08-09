'use strct';
import express from 'express';
import ejs from 'ejs';

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.status(200).render('../ps.ejs')
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))