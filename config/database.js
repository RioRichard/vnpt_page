require('dotenv').config();

module.exports = {
    type: "mysql",
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 3306,
    username: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_DATABASE || "vnpt_demo",
    synchronize: process.env.DB_SYNCHRONIZE === "true" || false,
    logging: process.env.DB_LOGGING === "true" || false,
    entities: ["src/entities/**/*.js"],
    migrations: ["src/migrations/**/*.js"],
    subscribers: ["src/subscribers/**/*.js"],
    cli: {
        entitiesDir: "src/entities",
        migrationsDir: "src/migrations",
        subscribersDir: "src/subscribers"
    }
}
