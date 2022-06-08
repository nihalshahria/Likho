# Project Title

## About <a name = "about"></a>

This is a CRUD application for posting and managing blog posts.

## Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

To run this project, you will need to have the following installed:
1) Node.js
2) NPM
3) Docker
4) Docker Compose

### Installing

1) Go to the project directory and run the following command to start docker-compose:
```
docker-compose up -d
```
2) Go to ```backend/``` directory and Run the following command to install dependencies:
```
npm i
```
3) create a ```.env``` file in ```backend/``` directory of the project and add the following lines:
```
PORT=5000
DB_NAME="news_blog"
DB_USER="appuser"
DB_PASS="secret"
JWT_KEY="secret"
```
4) Run the following following command to create the database:
```
npm run create-db
```
5) Run the following command to start the server:
```
npm start
```
6) For testing the backend api a [Postman collection file](https://github.com/nihalshahria/NewsBlog-CRUD/blob/main/backend/NewsBlogCRUD.postman_collection.json) is provided.
