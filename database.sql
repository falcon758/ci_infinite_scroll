SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE IF NOT EXISTS `real_state` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `address` text NOT NULL,
  `price` double NOT NULL,
  `size` double NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=24 ;

--
-- Dumping data for table `news`
--

INSERT INTO `real_state` (`address`, `price`, `size`) VALUES
('The address', 100000, 150),
('The address', 200000, 250),
('The address', 300000, 350),
('The address', 400000, 450),
('The address', 500000, 550);
('The address', 1000000, 150),
('The address', 2000000, 250),
('The address', 3000000, 350),
('The address', 4000000, 450),
('The address', 5000000, 550);
('The address', 10000000, 150),
('The address', 20000000, 250),
('The address', 30000000, 350),
('The address', 40000000, 450),
('The address', 50000000, 550);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
