CREATE TABLE `users` (
  `id` char(36) PRIMARY KEY,
  `email` varchar(255),
  `password` varchar(255),
  `role` enum('admin', 'user') DEFAULT 'user'
);

CREATE TABLE `posts` (
  `id` bigint PRIMARY KEY AUTO_INCREMENT,
  `slug` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `date_created` datetime,
  `date_updated` datetime,
  `content` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci
);

CREATE TABLE `post_types` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci
);

CREATE TABLE `posts_post_types` (
  `posts_id` bigint,
  `posts_type_id` int,
  PRIMARY KEY (`posts_id`, `posts_type_id`)
);

ALTER TABLE `posts_post_types` ADD FOREIGN KEY (`posts_id`) REFERENCES `posts` (`id`);

ALTER TABLE `posts_post_types` ADD FOREIGN KEY (`posts_type_id`) REFERENCES `post_types` (`id`);

-- Set default charset and collation for the database
ALTER DATABASE vnpt_demo CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Insert default post types
INSERT INTO `post_types` (`type`) VALUES
('Tin tức'),
('Khuyến mãi'),
('Chính sách');
