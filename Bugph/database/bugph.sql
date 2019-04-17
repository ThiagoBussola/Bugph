# Host: localhost  (Version 5.5.5-10.1.30-MariaDB)
# Date: 2019-04-10 19:43:50
# Generator: MySQL-Front 6.1  (Build 1.26)


#
# Structure for table "usuarios"
#

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `senha` varchar(255) DEFAULT NULL,
  `ultimo_login` datetime DEFAULT NULL,
  `datahora` datetime DEFAULT NULL,
  `token` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

#
# Data for table "usuarios"
#


#
# Structure for table "posts"
#

DROP TABLE IF EXISTS `posts`;
CREATE TABLE `posts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_usuario` int(11) DEFAULT NULL,
  `titulo` varchar(255) DEFAULT NULL,
  `imagem` varchar(255) DEFAULT NULL,
  `datahora` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fkusuarioposts` (`id_usuario`),
  CONSTRAINT `fkusuarioposts` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

#
# Data for table "posts"
#


#
# Structure for table "comentarios"
#

DROP TABLE IF EXISTS `comentarios`;
CREATE TABLE `comentarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_usuario` int(11) DEFAULT NULL,
  `id_post` int(11) DEFAULT NULL,
  `comentarios` varchar(255) DEFAULT NULL,
  `datahora` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fkpostcomentario` (`id_post`),
  KEY `fkusuariocomentario` (`id_usuario`),
  CONSTRAINT `fkpostcomentario` FOREIGN KEY (`id_post`) REFERENCES `posts` (`id`),
  CONSTRAINT `fkusuariocomentario` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

#
# Data for table "comentarios"
#


#
# Structure for table "curtidas"
#

DROP TABLE IF EXISTS `curtidas`;
CREATE TABLE `curtidas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_usuario` int(11) DEFAULT NULL,
  `id_post` int(11) DEFAULT NULL,
  `datahora` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fkusuariocurtida` (`id_usuario`),
  KEY `fkpostcurtida` (`id_post`),
  CONSTRAINT `fkpostcurtida` FOREIGN KEY (`id_post`) REFERENCES `posts` (`id`),
  CONSTRAINT `fkusuariocurtida` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

#
# Data for table "curtidas"
#


#
# Structure for table "logs"
#

DROP TABLE IF EXISTS `logs`;
CREATE TABLE `logs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_usuario` int(11) DEFAULT NULL,
  `log` varchar(255) DEFAULT NULL,
  `datahora` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fkusuariologs` (`id_usuario`),
  CONSTRAINT `fkusuariologs` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

#
# Data for table "logs"
#

id
id_usuario
titulo
imagem
datahora]

'INSERT INTO post (id, email, senha, ultimo_login, datahora, token) VALUES(?,?,?,?,?,?,)',
 [body.nome, body.email, body.senha, body.ultimo_login, body.datahora, body.data_hora]);