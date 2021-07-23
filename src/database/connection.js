const mongoose = require('mongoose')
require('dotenv').config()

CONNECTION_STRING = 'mongodb+srv://Eirond:ClGYBfpCA6eDd1wX@cluster0.u33ht.mongodb.net/randol-db?retryWrites=true&w=majority' || ''

console.log(CONNECTION_STRING)

await mongoose.connect(CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => console.log('DB Connected'))
    .catch(err => console.log(err))
