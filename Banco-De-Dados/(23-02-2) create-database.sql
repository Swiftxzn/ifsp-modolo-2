drop database redesocial;

create database redesocial;

use redesocial;

create table usuario (
	nome varchar(50) not null,
    usuario varchar(50) not null unique,
    senha varchar(30) not null
);

insert into usuario (nome, usuario, senha) values ("Bruno", "bruno_1", "1234");
insert into usuario (nome, usuario, senha) values ("William", "william_1", "senha1234");
select * from usuario;