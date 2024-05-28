-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 28, 2024 at 09:19 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_react_blog`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `category_aid` int(11) NOT NULL,
  `category_title` varchar(50) NOT NULL,
  `category_is_active` tinyint(1) NOT NULL,
  `category_datetime` varchar(20) NOT NULL,
  `category_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`category_aid`, `category_title`, `category_is_active`, `category_datetime`, `category_created`) VALUES
(1, 'Trending', 1, '2024-05-24 14:33:47', '2024-05-24 14:33:13'),
(2, 'Featured', 1, '2024-05-24 14:33:41', '2024-05-24 14:33:41');

-- --------------------------------------------------------

--
-- Table structure for table `post`
--

CREATE TABLE `post` (
  `post_aid` int(11) NOT NULL,
  `post_is_featured` tinyint(1) NOT NULL,
  `post_title` varchar(50) NOT NULL,
  `post_image` varchar(100) NOT NULL,
  `post_author` varchar(50) NOT NULL,
  `post_category_id` int(11) NOT NULL,
  `post_tag_id` int(11) NOT NULL,
  `post_is_active` tinyint(1) NOT NULL,
  `post_article` text NOT NULL,
  `post_publish_date` varchar(20) NOT NULL,
  `post_datetime` int(20) NOT NULL,
  `post_created` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `post`
--

INSERT INTO `post` (`post_aid`, `post_is_featured`, `post_title`, `post_image`, `post_author`, `post_category_id`, `post_tag_id`, `post_is_active`, `post_article`, `post_publish_date`, `post_datetime`, `post_created`) VALUES
(1, 1, 'Bini 1', 'bini3.jpg', 'Bini', 1, 3, 1, '# Heading level 1', '2024-05-24', 2024, 2024),
(3, 0, 'asasas', 'Untitled design.png', 'asasa', 1, 2, 1, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id fermentum felis. In elementum libero quis dictum aliquam. Curabitur lacus ligula', 'now', 2024, 2024),
(4, 0, 'test', 'bini2.webp', 'binni', 1, 2, 1, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id fermentum felis. In elementum libero quis dictum aliquam. Curabitur lacus ligula', '2024-05-24', 2024, 2024),
(5, 0, 'Karina Aespa', 'karina-aespa-girls-4k-wallpaper-uhdpaper.com-899@1@g.jpg', 'karina', 2, 2, 1, 'sdsojdjskdjhnsdjnsjdnjsndsndjnsdnsjdnjsndnsdns', '2024-05-24', 2024, 2024),
(6, 0, 'testing tag', 'bini2.webp', 'test loverboy', 1, 2, 1, '## heading 1\n\n*heading 1*', '2024-05-28', 2024, 2024),
(7, 0, 'test trending', 'banner-careers-sm.png', 'mcdo', 1, 3, 1, '## Heading 1', '2024-05-28', 2024, 2024);

-- --------------------------------------------------------

--
-- Table structure for table `tag`
--

CREATE TABLE `tag` (
  `tag_aid` int(11) NOT NULL,
  `tag_title` varchar(50) NOT NULL,
  `tag_is_active` tinyint(1) NOT NULL,
  `tag_datetime` varchar(20) NOT NULL,
  `tag_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tag`
--

INSERT INTO `tag` (`tag_aid`, `tag_title`, `tag_is_active`, `tag_datetime`, `tag_created`) VALUES
(2, 'test', 1, '2024-05-28 07:50:02', '2024-05-28 07:50:02'),
(3, 'Food', 1, '2024-05-28 08:21:34', '2024-05-28 08:21:34');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_aid` int(11) NOT NULL,
  `user_is_active` tinyint(1) NOT NULL,
  `user_name` varchar(100) NOT NULL,
  `user_email` varchar(50) NOT NULL,
  `user_key` varchar(255) NOT NULL,
  `user_password` varchar(255) NOT NULL,
  `user_created` varchar(20) NOT NULL,
  `user_datetime` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_aid`, `user_is_active`, `user_name`, `user_email`, `user_key`, `user_password`, `user_created`, `user_datetime`) VALUES
(6, 1, 'clarence', 'bonillaclarencejake@gmail.com', '', '$2y$10$/Q41wt2yq2acCfrua7WbVO5WJH1RanLIN9k3rCC4O3rR9cf4ZC9nK', '2024-05-20 13:34:25', '2024-05-21 12:27:39');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`category_aid`);

--
-- Indexes for table `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`post_aid`);

--
-- Indexes for table `tag`
--
ALTER TABLE `tag`
  ADD PRIMARY KEY (`tag_aid`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `category_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `post`
--
ALTER TABLE `post`
  MODIFY `post_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `tag`
--
ALTER TABLE `tag`
  MODIFY `tag_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
