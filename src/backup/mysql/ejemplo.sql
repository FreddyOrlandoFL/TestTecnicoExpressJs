-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 14-04-2024 a las 11:01:44
-- Versión del servidor: 8.0.35
-- Versión de PHP: 8.2.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `ejemplo`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contactos`
--

CREATE TABLE `contactos` (
  `id` int NOT NULL,
  `nombre` varchar(20) NOT NULL,
  `nombre_empresa` varchar(191) NOT NULL,
  `correo` varchar(191) NOT NULL,
  `telefono` varchar(191) NOT NULL,
  `categoria` varchar(191) NOT NULL,
  `mensaje` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `contactos`
--

INSERT INTO `contactos` (`id`, `nombre`, `nombre_empresa`, `correo`, `telefono`, `categoria`, `mensaje`) VALUES
(1, 'Freddy Figueroa', 'Hispanos Soluciones', 'freddyfigueroa1982@gmail.com', '+584123756093', 'Ventas', 'Hola soy Goku'),
(2, 'Milagros Figueroa', 'UDO', 'milafiglar@gmail.com', '+584267894063', 'Facturacion', 'Hola'),
(3, 'Tony Figueras', 'Hispanos Soluciones', 'tonfy@gmail.com', '+584247894056', 'ventas', 'hola'),
(18, 'Yuglinet Gonzalez', 'Inversiones Gonz Family', 'yutgonz@gmai.com', '+584248709635', 'Ventas', 'hola yugli');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `contactos`
--
ALTER TABLE `contactos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `contactos`
--
ALTER TABLE `contactos`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
