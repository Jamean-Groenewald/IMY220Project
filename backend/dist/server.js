"use strict";

var _express = _interopRequireDefault(require("express"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
//u23524121 Jamean Groenewald

//const express = require("express");

var app = (0, _express["default"])();
var port = 3000;
app.use(_express["default"]["static"]("frontend/public"));
app.listen(port, function () {
  console.log("Listening on http://localhost:".concat(port));
});