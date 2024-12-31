const AppDataSource = require('../config/database');

async function connectDB() {
    try {
        await AppDataSource.initialize();
        console.log('Database connected successfully');
        return AppDataSource;
    } catch (error) {
        console.error('Database connection failed:', error);
        process.exit(1);
    }
}

module.exports = connectDB;
