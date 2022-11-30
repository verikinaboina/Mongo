require('dotenv').config();
const mongoose = require('mongoose');
const mongoUrl = process.env.DB_URL;

const mongoConnection = async () => {
    try {
        const dbConnection = await mongoose.connect(mongoUrl);
        console.log("DB is connected");
    } catch {
        
    } finally {
        // await mongoose.disconnect();
    }
}

module.exports = mongoConnection;
