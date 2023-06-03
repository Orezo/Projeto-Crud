create database banquinho;
use banquinho;

create table infoUsers(
id_u int primary key auto_increment,
nome varchar(255) not null,
email varchar(255) not null,
senha varchar(255) not null
);

select * from infoUsers;

create table planos (
id int primary key auto_increment ,
tarefas varchar (255) not null
);


select * from planos;