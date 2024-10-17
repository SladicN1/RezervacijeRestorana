

SELECT name, collation_name FROM sys.databases;
GO
ALTER DATABASE db_aae270_rr SET SINGLE_USER WITH
ROLLBACK IMMEDIATE;
GO
ALTER DATABASE db_aae270_rr COLLATE Croatian_CI_AS;
GO
ALTER DATABASE db_aae270_rr SET MULTI_USER;
GO
SELECT name, collation_name FROM sys.databases;
GO

create table rezervacije(
sifra int not null primary key identity(1,1),
idstol int not null,
brojosoba int,
vrijemedolaska datetime
);

create table stolovi(
sifra int not null primary key identity(1,1),
idkonobar int not null,
lokacija varchar(50) not null,
brojstolica int
);

create table konobari(
sifra int not null primary key identity(1,1),
ime varchar(30) not null,
prezime varchar(30) not null,
oib char(11)
);

alter table stolovi add foreign key (idkonobar) references konobari(sifra);
alter table rezervacije add foreign key (idstol) references stolovi(idstol);



insert into konobari(ime,prezime,oib) values
('Nikola','Sladić','12345678999'),
('Stojan','Carić', '59385720692'),
('Goran','Maras','54382957223');



insert into stolovi(idkonobar,lokacija,brojstolica)
values (1, 'Terasa van', 6);


insert into rezervacije(idstol, brojosoba, vrijemedolaska)
values(1, 6, '2024-06-25 18:30');