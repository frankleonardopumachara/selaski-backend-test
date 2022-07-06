create database if not exists `db-selaski`;

use `db-selaski`;

create table if not exists OrdersProducts
(
    idOrdersProducts int auto_increment
    primary key,
    idOrder          int          null,
    valueUnit        double       null,
    unit             varchar(50)  null,
    description      varchar(500) null,
    sku              varchar(500) null,
    quantity         int          null,
    qtyBox           int          null,
    weight           double       null,
    volumen          double       null,
    mark             varchar(500) null,
    status           tinyint(1)   null
    );

create table if not exists User
(
    idUser int auto_increment
    primary key,
    name   varchar(100) null,
    email  varchar(100) null,
    status tinyint(1)   null
    );

create table if not exists Orders
(
    idOrder      int auto_increment
    primary key,
    idUser       int                                null,
    orderNumber  int                                null,
    dateTime     datetime                           null,
    providerName varchar(100)                       null,
    observation  varchar(500)                       null,
    totalValue   double                             null,
    status       tinyint(1)                         null,
    dateCreated  datetime default CURRENT_TIMESTAMP null,
    constraint Orders_User_idUser_fk
    foreign key (idUser) references User (idUser)
    );
