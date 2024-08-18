const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.DB_URI);
        console.log('DB connected successfully!');
    } catch (error) {
        console.log('DB connection failed', error);
        process.exit(1);
    }
}

module.exports = connectDB;