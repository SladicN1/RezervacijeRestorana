
use master;
go
drop database if exists rezervacijerestorana;
go
create database rezervacijerestorana collate Croatian_CI_AS;
go
use rezervacijerestorana;

create table konobari(
sifra int not null primary key identity(1,1),
ime varchar(50) not null,
prezime varchar(50) null, -- ali se null ne piše, podrazumjeva se
oib char(11)
);

create table rezervacije(
sifra int not null primary key identity(1,1),
brojosoba int not null,
konobar int not null,
stol int not null,
vrijemedolaska datetime
);

create table stolovi(
sifra int not null primary key identity(1,1),
konobar int not null,
lokacija varchar(50) not null,
brojstolica int
);



alter table rezervacije add foreign key (konobar) references konobari(sifra);
alter table rezervacije add foreign key (stol) references stolovi(sifra);
alter table stolovi add foreign key(konobar) references konobari(sifra);


--select * from smjerovi;

-- ŠKOLSKA SINTAKSA
-- 1 -> ovo je šifra koju generira baza
insert into konobari (ime,prezime,oib)
values ('Pero','Perić','22525655555'),('Marina','Perić','22256585555'),('Kata','Perić','22526585555');

