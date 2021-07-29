import express from 'express'
//import bodyParser from 'body-parser'
import path from 'path'

const app = express()
const router = express.Router()

app.set('view engine', 'ejs')

//app.use(bodyParser.json())
app.use('/', router)

const port = 3000;
app.listen(port, () =>
  console.log(`The application is started on port ${port}`)
)



router.get('/', (req, res) => res.sendFile(path.join(path.resolve(), '/index.html')))
router.get('/hello', (req, res) => res.send('hi'))
