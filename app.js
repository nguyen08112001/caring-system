const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')

require('dotenv').config()



const app = express()
const port = process.env.PORT || 8080

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('public'))

app.engine('hbs', exphbs({ extname: '.hbs' }))
app.set('view engine', 'hbs')

const homeRouter = require('./routes/HomeRouter')
app.use('/', homeRouter)



const studentRouter = require('./routes/StudentRouter.js')
app.use('/student', studentRouter)

app.listen(port, () => console.log(`http://localhost:${port}/`))