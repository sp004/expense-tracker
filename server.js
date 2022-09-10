const express = require('express');
const path = require('path')
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db')

dotenv.config({path: './config/config.env'})

connectDB()

const transactionRouter = require('./routes/transaction')

const app = express()

app.use(express.json())
app.use('/api/v1/transaction', transactionRouter)

if(process.env.NODE_ENV === 'developemen'){
    app.use(morgan('dev'))
}

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')))
}

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}!`))