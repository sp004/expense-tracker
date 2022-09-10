const mongoose = require('mongoose')

const transactionSchema = new mongoose.Schema({
    text: {
        type: String,
        trim: true,
        required: [true, "Please add a text"]
    },
    amount: {
        type: Number,
        required: [true, 'Please add a number']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('transaction', transactionSchema)