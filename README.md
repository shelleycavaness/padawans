# padawan
## Skill tree
##Description:
This application is a simple platform to centralize our work and it concentrates on the main competencies of the French level 2 developer degree. 

Each student must self evaluate their level.
# TODO

Stages of conception, concevoir une base de données : NIVEAU 1  
* [X] Description de l'application, explication & pitch  
* [ ] Define different models 
* [X] make a database model un MCD  http://www.mocodo.net/   
* [ ] Make “un MPD” - Schéma for the database- 
Layout of an application: NIVEAU 2    
* [ ] Use Figma   
* [ ] wireframes / and sketches
Mettre en place une base de données : NIVEAU 2  
* [ ] relational database MYSQL  
* [ ] Outils - phpmyadmin  

Create components in a database language, with a backend server : NIVEAU 2  
* [ ] Nodejs - express - mysql  

# Skill tree



#### Description de l'application  

“Padawans” est une plateforme qui a pour but de centraliser tous les modules ainsi que toutes 
les compétences du référentiel CDA.
Elle permet aux apprenants un suivi de leur évolution par rapport aux différentes compétences du référentiel et aux autres apprenants de leurs promotion.






# TODO

Étape de Conception, concevoir une base de données : NIVEAU 1  
* [X] Description de l'application, explication & pitch  
* [ ] Définir les différentes entités (modèles)  
* [X] Faire un MCD sur http://www.mocodo.net/ 
* [ ] Faire un MPD - Schéma de base de données 


Maquetter une application : NIVEAU 2    
* [ ] Utilisation de Figma   
* [ ] Création de wireframe    

Mettre en place une base de données : NIVEAU 2  
* [ ] BD MYSQL  
* [ ] Outils - phpmyadmin 

Développer des composants dans le langage d'une base de données, back-end, multi-couche, composant métier : NIVEAU 2  
* [ ] Nodejs - express - mysql  

Préparer et exécuter les plans de tests d’une application : NIVEAU 2  
* [ ] Utilisation de postman  
* [ ] Afficher les requêtes et les résultats des fonctionnalités énoncés dans le sujet  

Développer la partie front-end d'une interface : NIVEAU 1 - NIVEAU 2  
* [ ] Mise en place d'une architecture front en React js 
* [ ] Bundler  
* [ ] Mise en place des bonnes pratiques de conception  
* [ ] Intégrations des maquettes  

# ENTITIES
#### Apprenant
- ID
- FIRSTNAME
- LASTNAME
- EMAIL
- Competences

#### Competences
- ID
- TITLE
- MODULE_ID
- DESCRIPTION

#### Modules
- ID
- TITLE
- Competence_ID

#### apprenant has competence
(#(id.apprenant,id.competence),id.niveau)

- MODULE_ID
- Competence_ID 
- Apprenant_ID

###
un apprenant peut avoir 0,N competence
une competence peut etre aquise par 0,N aprenant 

-> une relation Avoir entre apprenant et competence

pour un apprenant il a 1,1 niveau pour 1,1 competence 
pour une competence il y a 1,1 seul niveau pour 1,1 apprenant 

un module contient 1,N competence 
une competence apartient a un seul module 
->table competence id.module

