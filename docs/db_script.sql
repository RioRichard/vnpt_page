CREATE TABLE `users` (
  `id` guid PRIMARY KEY,
  `email` varchar(255),
  `password` varchar(255),
  `role` enum
);

CREATE TABLE `posts` (
  `id` bigint PRIMARY KEY,
  `slug` varchar(255),
  `title` varchar(255),
  `date_created` datetime,
  `date_updated` datetime
);

CREATE TABLE `post_types` (
  `id` int PRIMARY KEY,
  `type` varchar(255)
);

CREATE TABLE `posts_post_types` (
  `posts_id` bigint,
  `posts_type_id` int,
  PRIMARY KEY (`posts_id`, `posts_type_id`)
);

ALTER TABLE `posts_post_types` ADD FOREIGN KEY (`posts_id`) REFERENCES `posts` (`id`);

ALTER TABLE `posts_post_types` ADD FOREIGN KEY (`posts_type_id`) REFERENCES `post_types` (`id`);
