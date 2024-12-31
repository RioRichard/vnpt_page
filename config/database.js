require('dotenv').config();
const { DataSource } = require("typeorm");
const path = require('path');

const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 3306,
    username: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || "123",
    database: process.env.DB_DATABASE || "vnpt_demo",
    entities: [path.join(__dirname, "../src/entities/**/*.js")],
    migrations: [path.join(__dirname, "../src/migrations/**/*.js")],
    synchronize: false,
    logging: true
});

module.exports = AppDataSource;
