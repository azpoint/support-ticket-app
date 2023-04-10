const envConfig = require("../../../envConfig")
const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(envConfig.db_url)
        console.log(`Database connected: ${connect.connection.host}`.cyan.underline)
    } catch (error) {
        console.log(`Database Connection error: ${error.message}`.red.underline.bold)
        process.exit(1)
    }
}

module.exports = connectDB