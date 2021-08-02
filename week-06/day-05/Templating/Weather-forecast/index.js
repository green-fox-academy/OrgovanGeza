'use strict';

import express from 'express';
import ejs from 'ejs';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {

});

app.listen(PORT, ()=>{
    console.log(`App is listening on port ${PORT}`);
})