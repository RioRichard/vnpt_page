const { createConnection } = require('typeorm');
const dbConfig = require('../config/database');

async function connectDB() {
    try {
        const connection = await createConnection(dbConfig);
        console.log('Database connected successfully');
        return connection;
    } catch (error) {
        console.error('Database connection failed:', error);
        process.exit(1);
    }
}

module.exports = connectDB;
