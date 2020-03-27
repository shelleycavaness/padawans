-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : ven. 27 mars 2020 à 09:57
-- Version du serveur :  5.7.24
-- Version de PHP : 7.2.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `padawans`
--

-- --------------------------------------------------------

--
-- Structure de la table `descriptions`
--

CREATE TABLE `descriptions` (
  `id` int(11) NOT NULL,
  `content` varchar(45) NOT NULL,
  `skills_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `descriptions`
--

INSERT INTO `descriptions` (`id`, `content`, `skills_id`) VALUES
(1, 'description 1 -1', 1),
(2, 'description 2-1', 1),
(3, 'description 1-2', 2);

-- --------------------------------------------------------

--
-- Structure de la table `levels`
--

CREATE TABLE `levels` (
  `id` int(11) NOT NULL,
  `level_name` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `levels`
--

INSERT INTO `levels` (`id`, `level_name`) VALUES
(1, 'level1'),
(2, 'level2'),
(3, 'level3');

-- --------------------------------------------------------

--
-- Structure de la table `modules`
--

CREATE TABLE `modules` (
  `id` int(11) NOT NULL,
  `module_name` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `modules`
--

INSERT INTO `modules` (`id`, `module_name`) VALUES
(1, 'module1'),
(2, 'module2'),
(3, 'module3');

-- --------------------------------------------------------

--
-- Structure de la table `padawans`
--

CREATE TABLE `padawans` (
  `id` int(11) NOT NULL,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `padawans`
--

INSERT INTO `padawans` (`id`, `first_name`, `last_name`, `email`, `password`) VALUES
(1, 'rim', 'chakroun', 'rim@gmail.com', '$2b$10$gc9980mksZDr7IYnUGWESOpUvX5cS898.D5FIgVRt5cNb9EtaSx9u'),
(2, 'gaby', 'gaby', 'gaby@gmail.com', 'gaby'),
(3, 'jega', 'jega', 'jega@gmail.com', 'jega'),
(4, 'adam', 'adam', 'adam@gmail.com', 'adam'),
(5, 'shelley', 'shelley', 'shelley@shelley.com', 'shelley');

-- --------------------------------------------------------

--
-- Structure de la table `padawans_has_skills`
--

CREATE TABLE `padawans_has_skills` (
  `padawans_id` int(11) NOT NULL,
  `skills_id` int(11) NOT NULL,
  `levels_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `padawans_has_skills`
--

INSERT INTO `padawans_has_skills` (`padawans_id`, `skills_id`, `levels_id`) VALUES
(1, 4, 1),
(2, 1, 1),
(4, 1, 1),
(5, 1, 1),
(1, 2, 2),
(1, 3, 2),
(2, 2, 2),
(2, 3, 2),
(2, 4, 2),
(3, 2, 2),
(3, 3, 2),
(4, 3, 2),
(5, 4, 2),
(1, 1, 3),
(3, 1, 3),
(3, 4, 3),
(4, 2, 3),
(4, 4, 3),
(5, 2, 3),
(5, 3, 3);

-- --------------------------------------------------------

--
-- Structure de la table `skills`
--

CREATE TABLE `skills` (
  `id` int(11) NOT NULL,
  `skill_name` varchar(45) NOT NULL,
  `modules_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `skills`
--

INSERT INTO `skills` (`id`, `skill_name`, `modules_id`) VALUES
(1, 'skill1', 1),
(2, 'skill2', 3),
(3, 'skill3', 3),
(4, 'skill4', 1),
(5, 'skill5', 3);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `descriptions`
--
ALTER TABLE `descriptions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `skill_description1` (`skills_id`);

--
-- Index pour la table `levels`
--
ALTER TABLE `levels`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `modules`
--
ALTER TABLE `modules`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `padawans`
--
ALTER TABLE `padawans`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `padawans_has_skills`
--
ALTER TABLE `padawans_has_skills`
  ADD PRIMARY KEY (`padawans_id`,`skills_id`),
  ADD KEY `padawans_has_skills_level` (`levels_id`),
  ADD KEY `padawans_has_skills_skills` (`skills_id`);

--
-- Index pour la table `skills`
--
ALTER TABLE `skills`
  ADD PRIMARY KEY (`id`),
  ADD KEY `skills_module` (`modules_id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `descriptions`
--
ALTER TABLE `descriptions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `levels`
--
ALTER TABLE `levels`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `modules`
--
ALTER TABLE `modules`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `padawans`
--
ALTER TABLE `padawans`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `skills`
--
ALTER TABLE `skills`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `descriptions`
--
ALTER TABLE `descriptions`
  ADD CONSTRAINT `skill_description1` FOREIGN KEY (`skills_id`) REFERENCES `skills` (`id`);

--
-- Contraintes pour la table `padawans_has_skills`
--
ALTER TABLE `padawans_has_skills`
  ADD CONSTRAINT `padawans_has_skills_level` FOREIGN KEY (`levels_id`) REFERENCES `levels` (`id`),
  ADD CONSTRAINT `padawans_has_skills_padawans` FOREIGN KEY (`padawans_id`) REFERENCES `padawans` (`id`),
  ADD CONSTRAINT `padawans_has_skills_skills` FOREIGN KEY (`skills_id`) REFERENCES `skills` (`id`);

--
-- Contraintes pour la table `skills`
--
ALTER TABLE `skills`
  ADD CONSTRAINT `skills_module` FOREIGN KEY (`modules_id`) REFERENCES `modules` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
