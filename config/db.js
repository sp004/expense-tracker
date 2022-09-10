const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected ${conn.connection.host}`)
    } catch (error) {
        console.log(error.message)
        process.exit(1) // to kill the process, pass 1 as arg
    }
}

module.exports = connectDB

// NOTE: If your password includes special characters, and you are using your password in a connection string URI, encode the special characters.