-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 06-10-2017 a las 12:05:26
-- Versión del servidor: 10.1.25-MariaDB
-- Versión de PHP: 7.1.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `test`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registro`
--

CREATE TABLE `registro` (
  `idUser` int(11) NOT NULL,
  `Nombre` varchar(30) NOT NULL,
  `Apellido` varchar(30) NOT NULL,
  `Departamento` varchar(30) NOT NULL,
  `Ciudad` varchar(30) NOT NULL,
  `Telefono` int(10) NOT NULL,
  `Email` varchar(30) NOT NULL,
  `Foto` varchar(50) NOT NULL,
  `Pass` longtext NOT NULL,
  `Estado` int(11) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `registro`
--

INSERT INTO `registro` (`idUser`, `Nombre`, `Apellido`, `Departamento`, `Ciudad`, `Telefono`, `Email`, `Foto`, `Pass`, `Estado`) VALUES
(1, '1', '1', '1', '1', 1, '1', '1', '1', 1),
(2, '2', '2', '2', '2', 2, '2', '2', 'c81e728d9d4c2f636f067f89cc14862c', 1),
(8, '9', '9', '9', '9', 9, '9', '9', '45c48cce2e2d7fbdea1afc51c7c6ad26', 1),
(9, '9', '9', '9', '9', 9, '9', '9', '45c48cce2e2d7fbdea1afc51c7c6ad26', 1),
(10, '8', '8', '8', '8', 8, '8', '8', 'c9f0f895fb98ab9159f51fd0297e236d', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `registro`
--
ALTER TABLE `registro`
  ADD PRIMARY KEY (`idUser`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `registro`
--
ALTER TABLE `registro`
  MODIFY `idUser` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
