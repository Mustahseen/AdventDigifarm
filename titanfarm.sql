-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jun 29, 2023 at 03:06 PM
-- Server version: 8.0.31
-- PHP Version: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `digifarm`
--

-- --------------------------------------------------------

--
-- Table structure for table `titanfarm`
--

DROP TABLE IF EXISTS `titanfarm`;
CREATE TABLE IF NOT EXISTS `titanfarm` (
  `Plot_number` int NOT NULL,
  `row_number` int NOT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `image_orientation` varchar(100) NOT NULL,
  `image_name` varchar(100) NOT NULL,
  `tree_name` varchar(100) NOT NULL,
  `tree_number` int NOT NULL,
  `temperature` int NOT NULL,
  `soil_temperature` int NOT NULL,
  `humidity` int NOT NULL,
  `wind_speed` int NOT NULL,
  `pressure` int NOT NULL,
  `EC` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `titanfarm`
--

INSERT INTO `titanfarm` (`Plot_number`, `row_number`, `id`, `image_orientation`, `image_name`, `tree_name`, `tree_number`, `temperature`, `soil_temperature`, `humidity`, `wind_speed`, `pressure`, `EC`) VALUES
(1, 1, 1, 'L', 'images/L1_R1_1_L.jpg', 'Tree-R1-T1-L', 1, 68, 64, 45, 4, 1010, 1),
(1, 1, 2, 'R', 'images/L1_R1_1_R.jpg', 'Tree-R1-T1-R', 1, 68, 64, 45, 4, 1010, 2),
(1, 1, 3, 'L', 'images/L1_R1_2_L.jpg', 'Tree-R1-T2-L', 2, 69, 65, 48, 4, 1009, 2),
(1, 1, 4, 'R', 'images/L1_R1_2_R.jpg', 'Tree-R1-T2-R', 2, 69, 65, 48, 4, 1009, 2),
(1, 1, 5, 'L', 'images/L1_R1_3_L.jpg', 'Tree-R1-T3-L', 3, 65, 64, 55, 5, 1011, 3),
(1, 1, 6, 'R', 'images/L1_R1_3_R.jpg', 'Tree-R1-T3-R', 3, 65, 64, 55, 5, 1011, 3),
(1, 1, 7, 'L', 'images/L1_R1_24_L.jpg', 'Tree-R1-T24-L', 24, 64, 62, 53, 4, 1010, 2),
(1, 1, 8, 'R', 'images/L1_R1_24_R.jpg', 'Tree-R1-T24-R', 24, 64, 62, 53, 4, 1010, 2),
(1, 2, 9, 'L', 'images/L1_R2_23_L.jpg', 'Tree-R2-T23-L', 23, 69, 67, 51, 4, 1010, 2),
(1, 2, 10, 'R', 'images/L1_R2_23_R.jpg', 'Tree-R2-T23-R', 23, 69, 67, 51, 4, 1010, 2),
(1, 2, 11, 'L', 'images/L1_R2_24_L.jpg', 'Tree-R2-T24-L', 24, 74, 71, 56, 5, 1011, 2),
(1, 2, 12, 'R', 'images/L1_R2_24_R.jpg', 'Tree-R2-T24-R', 24, 74, 72, 56, 5, 1011, 2),
(1, 2, 13, 'L', 'images/L1_R2_25_L.jpg', 'Tree-R2-T25-L', 25, 72, 70, 58, 4, 1010, 2),
(1, 2, 14, 'R', 'images/L1_R2_25_R.jpg', 'Tree-R2-T25-R', 25, 72, 71, 58, 5, 1010, 2);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
