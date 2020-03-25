  # :deciduous_tree: Padawans plateform

---

#### :cherry_blossom:Description


This application is a simple platform to centralize our work and it concentrates on the main competencies of the French level 2 developer degree.

Each student must self evaluate their level.


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
- [ ] relational database MYSQL
- [ ] Outils - phpmyadmin

Create components in a database language, with a backend server : NIVEAU 2

- [ ] Nodejs - express - mysql

####  📦Entities

| Padawan | Skill | description | level | module | padawan has skill |
|-----------------------------------------|--------------------|-------------|----------|----------|---------------------------------|
| #id firstname lastname email password | #id name id.module | #id content | #id name | #id name | #(id.padawan id.skill) id.level |

 #### :cherry_blossom: Conception


- [Conceptual data model](/assets/conception/)
- [physical data model
  ](assets/conception/mpd.png)

 #### :cherry_blossom: Regles
 
un apprenant peut avoir 0,N competence
une competence peut etre aquise par 0,N aprenant

:arrow_right: une relation Avoir entre apprenant et competence

pour un apprenant il a 1,1 niveau pour 1,1 competence
pour une competence il y a 1,1 seul niveau pour 1,1 apprenant

un module contient 1,N competence
une competence apartient a un seul module

:arrow_right: La table competence id.module
