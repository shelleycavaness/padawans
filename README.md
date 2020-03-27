  # :deciduous_tree: Padawans plateform

---
:gb:
#### :cherry_blossom:Description


This application is a simple platform to centralize our work and it concentrates on the main competencies of the French level 2 developer degree.

Each student must self evaluate their level.

### :tulip:Install and setup
First Cone the repo and do an `npm install` in the /api/ folder.
Next look in the `assets/conception/scriptBD/pdawans.sql` for the sql script. Then in phpmyadmin create a new database called `padawans` (uft8_general_ci) and paste this script from pdawans.sql into the sql tab then execute! And voila! :trumpet: you are ready!


#### :scroll:Todo
NIVEAU 1 
Stages of conception, concevoir une base de données :  
* [X] Description de l'application, explication & pitch  
* [X] Define different models 
* [X] make a database model un MCD  http://www.mocodo.net/   
* [X] Make “un MPD” - Schéma for the database

NIVEAU 2   
Layout of an application :
Use a Database : 
Perform queries and a working CRUD for different models and elements : 
sql sever and backend server (node.js) :
* [ ] Use Figma   
* [ ] wireframes / and sketches
* [X] relational database MYSQL  
* [X] Outils - phpmyadmin / Workbench  
* [X] Nodejs - express - mysql  

Create a Frondtend interface : Level 1 - Level 2  
* [ ] React js 
* [ ] Bundler  
* [ ] Best practices for conception  
* [ ] Respect the design prototype (graphics, fonts, ux)   
####  📦Entities

| Padawan | Skill | description | level | module | padawan has skill |
|-----------------------------------------|--------------------|-------------|----------|----------|---------------------------------|
| #id firstname lastname email password | #id name id.module | #id content | #id name | #id name | #(id.padawan id.skill) id.level |

 #### :triangular_ruler:Conception


- [Conceptual data model](/assets/conception/mcd.svg)
- [physical data model
  ](assets/conception/mpd.png)

 #### :memo:Rules
 
un apprenant peut avoir 0,N competence
une competence peut etre aquise par 0,N aprenant

:arrow_right: une relation Avoir entre apprenant et competence

pour un apprenant il a 1,1 niveau pour 1,1 competence
pour une competence il y a 1,1 seul niveau pour 1,1 apprenant

un module contient 1,N competence
une competence apartient a un seul module

:arrow_right: La table competence id.module

---



:fr:
#### :cherry_blossom:Description de l'application  


“Padawans” est une plateforme qui a pour but de centraliser tous les modules ainsi que toutes 
les compétences du référentiel CDA.
Elle permet aux apprenants un suivi de leur évolution par rapport aux différentes compétences du référentiel et aux autres apprenants de leurs promotion.


### :tulip:Install and setup
Clone le repo et faire un `npm install` dans /api/ .
Ensuite copier le script de sql de `assets/conception/scriptBD/pdawans.sql`. Dans phpmyadmin crée une nouvelle base nomé  `padawans`  (uft8_general_ci) et il faut coler le tab sql tab et executer ! Et voila! :trumpet: 

#### :scroll:Todo

Étape de Conception, concevoir une base de données : NIVEAU 1  
* [X] Description de l'application, explication & pitch  
* [X] Définir les différentes entités (modèles)  
* [X] Faire un MCD sur http://www.mocodo.net/ 
* [X] Faire un MPD - Schéma de base de données 


Maquetter une application : NIVEAU 2    
* [ ] Utilisation de Figma   
* [ ] Création de wireframe    

Mettre en place une base de données : NIVEAU 2  
* [X] BD MYSQL  
* [X] Outils - phpmyadmin 

Développer des composants dans le langage d'une base de données, back-end, multi-couche, composant métier : NIVEAU 2  
* [X] Nodejs - express - mysql  

Préparer et exécuter les plans de tests d’une application : NIVEAU 2  
* [X] Utilisation de postman  
* [X] Afficher les requêtes et les résultats des fonctionnalités énoncés dans le sujet  

Développer la partie front-end d'une interface : NIVEAU 1 - NIVEAU 2  
* [ ] Mise en place d'une architecture front en React js 
* [ ] Bundler  
* [ ] Mise en place des bonnes pratiques de conception  
* [ ] Intégrations des maquettes  









####  📦Entities

| Padawan | Skill | description | level | module | padawan has skill |
|-----------------------------------------|--------------------|-------------|----------|----------|---------------------------------|
| #id firstname lastname email password | #id name id.module | #id content | #id name | #id name | #(id.padawan id.skill) id.level |

 #### :triangular_ruler:Conception


- [Conceptual data model](/assets/conception/mcd.svg)
- [physical data model
  ](assets/conception/mpd.png)

 #### :memo:Règles 
 
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