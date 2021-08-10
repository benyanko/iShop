# Movie Theater Management System
## Table of contents
* [General info](#general-info)
* [Stages](#stages)
* [Description](#description)
* [Setup](#setup)

## General info
This project implement Movie Theater Management System RESTful API using Flask-RESTful, SQLAlchemy and Redis. The system allows ordering chairs for the theater while maintaining the ability to take multiple orders simultaneously and the fact that specific chair can not be ordered for 2 different customers.

## Stages
The system is divided into 3 stages:

### View all available chairs
  * the app accesses the database and displays all items that are in status available and are not in the cache
  * ![alt text](https://github.com/[username]/[reponame]/blob/[branch]/image.jpg?raw=true)

### Order chair
  * The app checks whether the chair is in the cashe, if so, returns that the chair is occupied, else take the chair from the database, generates a confirmation id and registers the chair in the cashe.
  * ![alt text](https://github.com/[username]/[reponame]/blob/[branch]/image.jpg?raw=true)

### Pay Order
  * The application checks whether the confirmation id is the same as the confirmation id in cashe, if it also writes in the database that the chair has been ordered, otherwise the payment will not be made.
  * ![alt text](https://github.com/[username]/[reponame]/blob/[branch]/image.jpg?raw=true)

## Description
Description for each file:

### MovieLibraryMicroservice:

  * movie_library_models:
    * category_model -  CategoryModel fields are id, name. in addition contains a movies field which contains all the movies belonging to it implement by one-to-     many relationship
    * movie_model -  MovieModel fields are id, name, price, video_link. in addition contains a category_id field which contains the id category which it is associated implement by many-to-one relationship

  * movie_library_resource: 
    * category_resource -  Category implement HTTP request methods such as get, post, delete. 
    * movie_resource -  Movie implement HTTP request methods such as get, post, delete, put. 

  * setup_movie_library:
    * config - Set all the necessary settings.

  * Additional files:
    * main_movie_library - Create a Flask app with all the required routes.
    * movie_library_db - An abstract object for SQLAlchemy implementation.
    * movie_library_security - Security decorator for checking user accsess level.

### UserMicroservice:

  * models:
    * user_model -  UserModel fields are id, name, password.

  * resource: 
    * user_resource -  Movie implement post HTTP request method. 

  * setup_user:
    * config - Set all the necessary settings.

  * Additional files:
    * main_user - Create a Flask app with all the required routes.
    * user_db - An abstract object for SQLAlchemy implementation.
    * user_security - Contains authenticate and identity methods for JWT.

### Docker:
  * Dockerfile.movie_library - Docker file for MovieLibraryMicroservice.
  * Dockerfile.user - Docker file for UserMicroservice.

### Gunicorn:
  * guni_movie_library - Gunicorn configuration file for MovieLibraryMicroservice.
  * guni_user - Gunicorn configuration file for UserMicroservice.

### Additional files:
  * docker-compose -  Docker compose file to run multi-container microservice applications.
  * requirements -  List of packages are required to run the project.
 

## Setup
To build and run project (after installation):

* Navigate (in a terminal) into the ~/MoviezAPI folder.
* Run ```docker-compose build``` for your first build and when you have made changes.
* Run ```docker-compose up``` to run all the services.


## Task list
- [x] JWT
- [x] Database Relationships
- [x] Microservice archtucture
- [x] Docker
- [x] Gunicorn
- [ ] Recommender system


