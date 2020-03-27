  # :deciduous_tree: Padawans plateform

---

#### :cherry_blossom:Description


This application is a simple platform to centralize our work and it concentrates on the main competencies of the French level 2 developer degree.

Each student must self evaluate their level.

###:tulip:Install and setup
First pull the repo and do an `npm install` in the /api/ folder.
Next look in the assets/conception/scriptBD/pdawans.sql for the sql script. Then in phpmyadmin create a new database called padawans(uft8_general_ci) and paste this script from pdawans.sql into the sql tab then execute! And voila! :trumpet: you are ready

#### :scroll:Todo

Stages of conception, concevoir une base de données : NIVEAU 1

- [x] Description de l'application, explication & pitch
- [x] Define different models
- [x] make a database model un MCD http://www.mocodo.net/
- [x] Make "un MPD" - Schéma for the database-
      Layout of an application: NIVEAU 2
- [ ] Use Figma
- [ ] wireframes / and sketches
      Mettre en place une base de données : NIVEAU 2
- [X] relational database MYSQL
- [x] Outils - phpmyadmin

Create components in a database language, with a backend server : NIVEAU 2

- [x] Nodejs - express - mysql

####  📦Entities

| Padawan | Skill | description | level | module | padawan has skill |
|-----------------------------------------|--------------------|-------------|----------|----------|---------------------------------|
| #id firstname lastname email password | #id name id.module | #id content | #id name | #id name | #(id.padawan id.skill) id.level |

 #### :triangular_ruler:Conception


- [Conceptual data model](/assets/conception/mcd.svg)
- [physical data model
  ](assets/conception/mpd.png)

 #### :memo:Regles
 
un apprenant peut avoir 0,N competence
une competence peut etre aquise par 0,N aprenant

:arrow_right: une relation Avoir entre apprenant et competence

pour un apprenant il a 1,1 niveau pour 1,1 competence
pour une competence il y a 1,1 seul niveau pour 1,1 apprenant

un module contient 1,N competence
une competence apartient a un seul module

:arrow_right: La table competence id.module

---

#### :email: Contacts


