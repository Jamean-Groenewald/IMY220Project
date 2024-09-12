"use strict";

var _express = _interopRequireDefault(require("express"));
var _path = _interopRequireDefault(require("path"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
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

var app = (0, _express["default"])();
var port = 3000;

// Resolve path from the project root
var publicPath = _path["default"].resolve('frontend', 'public');
app.use(_express["default"]["static"](publicPath));
app.get('*', function (req, res) {
  res.sendFile(_path["default"].resolve(publicPath, 'index.html'));
});

// Log paths for debugging
// console.log('Static files served from:', publicPath);
// console.log('Index file path:', path.resolve(publicPath, 'index.html'));

app.listen(port, function () {
  console.log("Listening on http://localhost:".concat(port));
});