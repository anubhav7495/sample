# Sample App

A ExpressJS App using Redis and Elastic Search.

# How To Run

1. git clone
2. npm install
3. run redis-server and elastic search server
4. node app.js

# Routes

    GET '/': Get all the key value pairs
    POST '/': Post body with "key" and "m" field
    GET '/search/:q' : Search messages by key value.
