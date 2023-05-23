# Steps to develop from scratch

1. create main project folder with two subfolders- server and client

### Server Setup

1. open the project in vs code, and initialize the project.

- cd server
- npm init -y
- create server.js
- install all the dependencies: npm install nodemon express uuid jsonwebtoken mongoose crypto-js dotenv
- in package.json, add the scripts: "start": "node server.js","dev": "nodemon server"
- to add import statements add "type": "module" in package.json
- the initial setup for server folder is done.
- start editing server.js
- Connect with MongoDb

### MongoDB Setup

- login to [MongoDB](cloud.mongodb.com)
- create project (remember this dbname)
- build database
- Choose the cloud subscription and provider (this project is created using free version)
- Provide clustername or let it be default as cluster0 and create cluster
- enter username and pwd (if any special characters added then later ascii codes have to be provided while providing database url)
- add IP: 0.0.0.0
- now to connect the db to our server: choose connect with your application
- copy the url provided there
  The link will be similar to: mongodb+srv://mongoDB:<password>@traveldbcluster.sv6u7go.mongodb.net/<dbname>?retryWrites=true&w=majority

if pwd has special characters: provide their ascii codes eg for @ use "%40"
if db name has space replace it by "+".
