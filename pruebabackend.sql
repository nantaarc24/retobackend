-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 18-03-2024 a las 17:04:53
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `pruebabackend`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personaje`
--

CREATE TABLE `personaje` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `height` varchar(50) DEFAULT NULL,
  `mass` varchar(50) DEFAULT NULL,
  `hair_color` varchar(50) DEFAULT NULL,
  `skin_color` varchar(50) DEFAULT NULL,
  `eye_color` varchar(50) DEFAULT NULL,
  `birth_year` varchar(50) DEFAULT NULL,
  `gender` varchar(50) DEFAULT NULL,
  `homeworld` varchar(255) DEFAULT NULL,
  `films` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`films`)),
  `species` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`species`)),
  `vehicles` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`vehicles`)),
  `starships` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`starships`)),
  `created` datetime DEFAULT NULL,
  `edited` datetime DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `personaje`
--

INSERT INTO `personaje` (`id`, `name`, `height`, `mass`, `hair_color`, `skin_color`, `eye_color`, `birth_year`, `gender`, `homeworld`, `films`, `species`, `vehicles`, `starships`, `created`, `edited`, `url`) VALUES
(5, 'Fernando Tapia', '172', '77', 'black', 'fair', 'brown', '24BBY', 'male', 'https://swapi.dev/api/planets/1/', '[\"https://swapi.dev/api/films/1/\",\"https://swapi.dev/api/films/2/\",\"https://swapi.dev/api/films/3/\",\"https://swapi.dev/api/films/6/\"]', '[]', '[\"https://swapi.dev/api/vehicles/14/\",\"https://swapi.dev/api/vehicles/30/\"]', '[\"https://swapi.dev/api/starships/12/\",\"https://swapi.dev/api/starships/22/\"]', '2014-12-09 13:50:51', '2014-12-20 21:17:56', 'https://swapi.dev/api/people/1/'),
(6, 'Sara Tapia', '172', '77', 'black', 'fair', 'brown', '24BBY', 'male', 'https://swapi.dev/api/planets/1/', '[\"https://swapi.dev/api/films/1/\",\"https://swapi.dev/api/films/2/\",\"https://swapi.dev/api/films/3/\",\"https://swapi.dev/api/films/6/\"]', '[]', '[\"https://swapi.dev/api/vehicles/14/\",\"https://swapi.dev/api/vehicles/30/\"]', '[\"https://swapi.dev/api/starships/12/\",\"https://swapi.dev/api/starships/22/\"]', '2014-12-09 13:50:51', '2014-12-20 21:17:56', 'https://swapi.dev/api/people/1/'),
(7, 'Xamir Cieza', '172', '77', 'black', 'fair', 'brown', '24BBY', 'male', 'https://swapi.dev/api/planets/1/', '[\"https://swapi.dev/api/films/1/\",\"https://swapi.dev/api/films/2/\",\"https://swapi.dev/api/films/3/\",\"https://swapi.dev/api/films/6/\"]', '[]', '[\"https://swapi.dev/api/vehicles/14/\",\"https://swapi.dev/api/vehicles/30/\"]', '[\"https://swapi.dev/api/starships/12/\",\"https://swapi.dev/api/starships/22/\"]', '2014-12-09 13:50:51', '2014-12-20 21:17:56', 'https://swapi.dev/api/people/1/');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `personaje`
--
ALTER TABLE `personaje`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `personaje`
--
ALTER TABLE `personaje`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
