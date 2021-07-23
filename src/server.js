const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
//require('./db/connection')


CONNECTION_STRING = 'mongodb+srv://Eirond:ClGYBfpCA6eDd1wX@cluster0.u33ht.mongodb.net/randol-db?retryWrites=true&w=majority' || ''

mongoose.connect(CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => console.log('DB Connected'))
    .catch(err => console.log(err))


//settings
const app = express()
require('dotenv').config()
app.set('port', process.env.PORT || 4500)

//middlewares
app.use(cors())
app.use(express.json())

//routes
app.get('/', (req, res) => res.send('holaa'))
app.use('/api/v1/estudiantes', require('./routes/estudiante.routes'))

module.exports = app