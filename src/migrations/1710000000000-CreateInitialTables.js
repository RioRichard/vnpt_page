const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class CreateInitialTables1710000000000 {
    async up(queryRunner) {
        // Create users table
        await queryRunner.query(`
            CREATE TABLE users (
                id char(36) PRIMARY KEY,
                email varchar(255) UNIQUE,
                password varchar(255) NOT NULL,
                role enum('admin', 'user') DEFAULT 'user'
            )
        `);

        // Create posts table
        await queryRunner.query(`
            CREATE TABLE posts (
                id bigint PRIMARY KEY AUTO_INCREMENT,
                slug varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
                title varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
                date_created datetime DEFAULT CURRENT_TIMESTAMP,
                date_updated datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                content longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci
            )
        `);

        // Create post_types table
        await queryRunner.query(`
            CREATE TABLE post_types (
                id int PRIMARY KEY AUTO_INCREMENT,
                type varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci
            )
        `);

        // Create posts_post_types table
        await queryRunner.query(`
            CREATE TABLE posts_post_types (
                posts_id bigint,
                posts_type_id int,
                PRIMARY KEY (posts_id, posts_type_id),
                FOREIGN KEY (posts_id) REFERENCES posts(id) ON DELETE CASCADE,
                FOREIGN KEY (posts_type_id) REFERENCES post_types(id) ON DELETE CASCADE
            )
        `);

        // Insert default post types
        await queryRunner.query(`
            INSERT INTO post_types (type) VALUES
            ('Tin tức'),
            ('Khuyến mãi'),
            ('Chính sách')
        `);
    }

    async down(queryRunner) {
        // Drop tables in reverse order
        await queryRunner.query('DROP TABLE IF EXISTS posts_post_types');
        await queryRunner.query('DROP TABLE IF EXISTS post_types');
        await queryRunner.query('DROP TABLE IF EXISTS posts');
        await queryRunner.query('DROP TABLE IF EXISTS users');
    }
}
