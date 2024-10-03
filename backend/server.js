// //u23524121 Jamean Groenewald

import express from 'express';
import path from 'path';
const { MongoClient } = require('mongodb');
import apiRoutes from './api';

const app = express();
const port = process.env.PORT || 3000;
const url = "mongodb+srv://jameangroenewald:bjO3XO9MqQnLVHkc@imy220.0n3k2.mongodb.net/?retryWrites=true&w=majority&appName=IMY220";
const publicPath = path.resolve('frontend', 'public'); // Resolve path from the project root
 
app.use(express.static(publicPath)); //serve static files from frontend.

//middleware to pass JSON + URL-encoded data stuff.
app.use(express.json());

app.use('/api', apiRoutes);

app.get('*', (req, res) => { //server frontend for any other route.
  res.sendFile(path.resolve(publicPath, 'index.html'));
});

const client = new MongoClient(url);

async function main()
{
  try
  {
    //console.log("attempting to connect to MongoDB...");
    
    // Create Connection
    await client.connect();
    
    //console.info("Connected to MongoDB");

    // Set Database
    const database = client.db("IMY220Project");

    const userCollection = database.collection("Users");
    const playlistCollection = database.collection("Playlists");
    const songsCollection = database.collection("Songs");

    // app.locals.db = //so that you expose colls to be used in routes.
    // {
    //   userCollection: client.db("IMY220Project").collection("Users"),
    //   playlistCollection: client.db("IMY220Project").collection("Playlists"),
    //   songsCollection: client.db("IMY220Project").collection("Songs")
    // };

    app.locals.userCollection = userCollection;
    app.locals.playlistCollection = playlistCollection;
    app.locals.songsCollection = songsCollection;

    app.listen(port, () => {
      console.log(`Listening on http://localhost:${port}`);
    });

  }
  catch(e) 
  {
      console.error(e);
  }
}

main().catch(console.error);






// //const express = require("express");
// import express from 'express';
// import path from 'path';

// const app = express();

// const port = 3000;

// //app.use(express.static("frontend/public"));

// app.use(express.static(path.join(__dirname, '../frontend/public')));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../frontend/public/index.html'));
// });

// console.log('Static files served from:', path.join(__dirname, '../frontend/public'));
// console.log('Index file path:', path.join(__dirname, '../frontend/public/index.html'));

// app.listen(port, () => {
// console.log(`Listening on http://localhost:${port}`);
// });
// Log paths for debugging
// console.log('Static files served from:', publicPath);
// console.log('Index file path:', path.resolve(publicPath, 'index.html'));

// app.listen(process.env.PORT, () => {
//   console.log(`Listening on http://localhost:${process.env.PORT}`);
// });

// const app = require('express')();

// const path = require('path')

// const publicPath = path.resolve('frontend', 'public');

// app.get('/', (req, res) => {
//     return res.sendFile(path.join(__dirname, './'));
// })

// app.get('/date', (req, res) => {
//     return res.json({ date: new Date() });
// })

// app.get('/ping', (req, res) => {
//     return res.json({ message: 'pong' });
// })

// app.listen(process.env.PORT, () => {
//     console.log(`Server is running on port ${process.env.PORT}`); //replace quotations with tildas (above tab)
// })