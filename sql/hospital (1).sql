-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 21, 2023 at 10:40 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hospital`
--

-- --------------------------------------------------------

--
-- Table structure for table `anaesthesiacaselogbook`
--

CREATE TABLE `anaesthesiacaselogbook` (
  `id` int(255) NOT NULL,
  `Patient_ID` varchar(255) NOT NULL,
  `Age` int(255) NOT NULL,
  `ASA` varchar(255) NOT NULL,
  `Urgency` varchar(255) NOT NULL,
  `Supervision` varchar(255) NOT NULL,
  `Operation` varchar(255) NOT NULL,
  `Specialty` varchar(255) NOT NULL,
  `Date` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `anaesthesiacaselogbook`
--

INSERT INTO `anaesthesiacaselogbook` (`id`, `Patient_ID`, `Age`, `ASA`, `Urgency`, `Supervision`, `Operation`, `Specialty`, `Date`) VALUES
(11, '123', 22, 'test', 'test', 'test', 'test', 'test', '2023-01-18'),
(12, '12312312', 33, 'test2', 'test2', 'test2', 'test2', 'test', '2023-01-03'),
(13, '', 0, '', '', '', '', '', ''),
(14, '123', 0, '', '', '', '', '', ''),
(15, '', 0, '', '', '', '', '', ''),
(16, '1234', 23, 'test', 'test', 'test', 'test', 'test', '2023-01-20');

-- --------------------------------------------------------

--
-- Table structure for table `classification`
--

CREATE TABLE `classification` (
  `id` int(11) NOT NULL,
  `ASA` int(255) NOT NULL,
  `Definition` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `classification`
--

INSERT INTO `classification` (`id`, `ASA`, `Definition`) VALUES
(1, 123, 123);

-- --------------------------------------------------------

--
-- Table structure for table `educational_and_academic_activities`
--

CREATE TABLE `educational_and_academic_activities` (
  `id` int(244) NOT NULL,
  `Course` varchar(255) NOT NULL,
  `Date` date NOT NULL,
  `Location` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `educational_and_academic_activities`
--

INSERT INTO `educational_and_academic_activities` (`id`, `Course`, `Date`, `Location`) VALUES
(1, '[value-2]', '0000-00-00', '[value-4]'),
(2, '[value-2]', '0000-00-00', '[value-4]');

-- --------------------------------------------------------

--
-- Table structure for table `fbarium_enema`
--

CREATE TABLE `fbarium_enema` (
  `id` int(255) NOT NULL,
  `Period` date NOT NULL,
  `NProcedures` int(255) NOT NULL,
  `Comments` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbarium_enema`
--

INSERT INTO `fbarium_enema` (`id`, `Period`, `NProcedures`, `Comments`) VALUES
(1, '0000-00-00', 0, '[value-4]'),
(2, '0000-00-00', 0, '[value-4]'),
(3, '0000-00-00', 0, '[value-4]');

-- --------------------------------------------------------

--
-- Table structure for table `fbarium_swallow_meal`
--

CREATE TABLE `fbarium_swallow_meal` (
  `id` int(255) NOT NULL,
  `Period` varchar(255) NOT NULL,
  `No_of_Procedures` int(255) NOT NULL,
  `Comments` varchar(255) NOT NULL,
  `Trainer` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbarium_swallow_meal`
--

INSERT INTO `fbarium_swallow_meal` (`id`, `Period`, `No_of_Procedures`, `Comments`, `Trainer`) VALUES
(0, '[value-2]', 0, '[value-4]', '[value-5]'),
(0, '[value-2]', 0, '[value-4]', '[value-5]');

-- --------------------------------------------------------

--
-- Table structure for table `fsmall_bowel_studies`
--

CREATE TABLE `fsmall_bowel_studies` (
  `Period` varchar(255) NOT NULL,
  `No_of_Procedures` int(255) NOT NULL,
  `Comments` varchar(255) NOT NULL,
  `Trainer` varchar(255) NOT NULL,
  `id` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fsmall_bowel_studies`
--

INSERT INTO `fsmall_bowel_studies` (`Period`, `No_of_Procedures`, `Comments`, `Trainer`, `id`) VALUES
('[value-1]', 0, '[value-3]', '[value-4]', 1);

-- --------------------------------------------------------

--
-- Table structure for table `furoradiology_intravenous_urogram`
--

CREATE TABLE `furoradiology_intravenous_urogram` (
  `id` int(255) NOT NULL,
  `Period` date NOT NULL,
  `Procedures_Included` varchar(255) NOT NULL,
  `Comments` varchar(255) NOT NULL,
  `Trainer` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `furoradiology_intravenous_urogram`
--

INSERT INTO `furoradiology_intravenous_urogram` (`id`, `Period`, `Procedures_Included`, `Comments`, `Trainer`) VALUES
(1, '0000-00-00', '[value-3]', '[value-4]', '[value-5]');

-- --------------------------------------------------------

--
-- Table structure for table `furoradiology_others`
--

CREATE TABLE `furoradiology_others` (
  `id` int(255) NOT NULL,
  `Date` date NOT NULL,
  `Procedure_` varchar(255) NOT NULL,
  `Complication` varchar(255) NOT NULL,
  `Comments` varchar(255) NOT NULL,
  `Trainer` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `furoradiology_others`
--

INSERT INTO `furoradiology_others` (`id`, `Date`, `Procedure_`, `Complication`, `Comments`, `Trainer`) VALUES
(1, '0000-00-00', '[value-3]', '[value-4]', '[value-5]', '[value-6]');

-- --------------------------------------------------------

--
-- Table structure for table `plain_film_reporting`
--

CREATE TABLE `plain_film_reporting` (
  `id` int(255) NOT NULL,
  `Date` date NOT NULL,
  `Time_spent_reporting` datetime NOT NULL,
  `Supervised` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `plain_film_reporting`
--

INSERT INTO `plain_film_reporting` (`id`, `Date`, `Time_spent_reporting`, `Supervised`) VALUES
(1, '0000-00-00', '0000-00-00 00:00:00', '[value-4]');

-- --------------------------------------------------------

--
-- Table structure for table `procedurelogbook`
--

CREATE TABLE `procedurelogbook` (
  `id` int(255) NOT NULL,
  `PROCEDURES` varchar(255) NOT NULL,
  `Minimum_requirements` varchar(255) NOT NULL,
  `No_Performed` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `procedurelogbook`
--

INSERT INTO `procedurelogbook` (`id`, `PROCEDURES`, `Minimum_requirements`, `No_Performed`) VALUES
(1, 'test', 'test', 'test'),
(2, 'test', 'test', 'test'),
(3, 'asdas', 'asdas', 'asdasd'),
(4, '213123', 'asdasd', 'asdasd'),
(5, 'test', '213', 'test');

-- --------------------------------------------------------

--
-- Table structure for table `technique`
--

CREATE TABLE `technique` (
  `id` int(255) NOT NULL,
  `Anesthetic_Technique` int(255) NOT NULL,
  `Minimum_requirements` int(255) NOT NULL,
  `No_Performed` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `technique`
--

INSERT INTO `technique` (`id`, `Anesthetic_Technique`, `Minimum_requirements`, `No_Performed`) VALUES
(1, 123, 123, 123),
(2, 123321, 123123123, 123123123);

-- --------------------------------------------------------

--
-- Table structure for table `training_posts_held`
--

CREATE TABLE `training_posts_held` (
  `id` int(255) NOT NULL,
  `Post_Number` varchar(255) NOT NULL,
  `Hospital` varchar(255) NOT NULL,
  `Residency_Year` varchar(255) NOT NULL,
  `Finish_Date` date NOT NULL,
  `Consultant` varchar(255) NOT NULL,
  `Consultant_signature` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `training_posts_held`
--

INSERT INTO `training_posts_held` (`id`, `Post_Number`, `Hospital`, `Residency_Year`, `Finish_Date`, `Consultant`, `Consultant_signature`) VALUES
(1, '[value-2]', '[value-3]', '[value-4]', '0000-00-00', '[value-6]', '[value-7]');

-- --------------------------------------------------------

--
-- Table structure for table `uabdomen`
--

CREATE TABLE `uabdomen` (
  `id` int(255) NOT NULL,
  `Period` date NOT NULL,
  `Procedures_Included` varchar(255) NOT NULL,
  `Comments` varchar(255) NOT NULL,
  `Trainer` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `uabdomen`
--

INSERT INTO `uabdomen` (`id`, `Period`, `Procedures_Included`, `Comments`, `Trainer`) VALUES
(1, '0000-00-00', 'test', '[value-4]', '[value-5]');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `anaesthesiacaselogbook`
--
ALTER TABLE `anaesthesiacaselogbook`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `classification`
--
ALTER TABLE `classification`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `educational_and_academic_activities`
--
ALTER TABLE `educational_and_academic_activities`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `fbarium_enema`
--
ALTER TABLE `fbarium_enema`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `fsmall_bowel_studies`
--
ALTER TABLE `fsmall_bowel_studies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `furoradiology_intravenous_urogram`
--
ALTER TABLE `furoradiology_intravenous_urogram`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `furoradiology_others`
--
ALTER TABLE `furoradiology_others`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `plain_film_reporting`
--
ALTER TABLE `plain_film_reporting`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `procedurelogbook`
--
ALTER TABLE `procedurelogbook`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `technique`
--
ALTER TABLE `technique`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `training_posts_held`
--
ALTER TABLE `training_posts_held`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `uabdomen`
--
ALTER TABLE `uabdomen`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `anaesthesiacaselogbook`
--
ALTER TABLE `anaesthesiacaselogbook`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `classification`
--
ALTER TABLE `classification`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `educational_and_academic_activities`
--
ALTER TABLE `educational_and_academic_activities`
  MODIFY `id` int(244) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `fbarium_enema`
--
ALTER TABLE `fbarium_enema`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `fsmall_bowel_studies`
--
ALTER TABLE `fsmall_bowel_studies`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `furoradiology_intravenous_urogram`
--
ALTER TABLE `furoradiology_intravenous_urogram`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `furoradiology_others`
--
ALTER TABLE `furoradiology_others`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `plain_film_reporting`
--
ALTER TABLE `plain_film_reporting`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `procedurelogbook`
--
ALTER TABLE `procedurelogbook`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `technique`
--
ALTER TABLE `technique`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `training_posts_held`
--
ALTER TABLE `training_posts_held`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `uabdomen`
--
ALTER TABLE `uabdomen`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
