// //u23524121 Jamean Groenewald

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

import express from 'express';
import path from 'path';

const app = express();
const port = 3000;

// Resolve path from the project root
const publicPath = path.resolve('frontend', 'public');

app.use(express.static(publicPath));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(publicPath, 'index.html'));
});

// Log paths for debugging
// console.log('Static files served from:', publicPath);
// console.log('Index file path:', path.resolve(publicPath, 'index.html'));

app.listen(process.env.PORT, () => {
  console.log(`Listening on http://localhost:${process.env.PORT}`);
});

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