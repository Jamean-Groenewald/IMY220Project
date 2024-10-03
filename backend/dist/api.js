"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var router = _express["default"].Router();

// User Sign-up
router.post('/signup', /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var _req$body, username, password, existingUser, newUser, result;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, username = _req$body.username, password = _req$body.password;
          _context.prev = 1;
          _context.next = 4;
          return req.app.locals.userCollection.findOne({
            username: username
          });
        case 4:
          existingUser = _context.sent;
          if (!existingUser) {
            _context.next = 7;
            break;
          }
          return _context.abrupt("return", res.status(400).json({
            message: 'Username already exists'
          }));
        case 7:
          newUser = {
            username: username,
            password: password
          };
          _context.next = 10;
          return req.app.locals.userCollection.insertOne(newUser);
        case 10:
          result = _context.sent;
          return _context.abrupt("return", res.status(200).json({
            status: 'success',
            message: 'signup successful'
          }));
        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](1);
          res.status(500).json({
            message: 'Error signing up user',
            error: _context.t0.message
          });
        case 17:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 14]]);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

// User Login
router.post('/login', /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var _req$body2, username, password, user;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _req$body2 = req.body, username = _req$body2.username, password = _req$body2.password; //console.log('Request body:', req.body);
          _context2.prev = 1;
          _context2.next = 4;
          return req.app.locals.userCollection.findOne({
            username: username
          });
        case 4:
          user = _context2.sent;
          if (user) {
            _context2.next = 7;
            break;
          }
          return _context2.abrupt("return", res.status(400).json({
            message: 'Invalid username or password'
          }));
        case 7:
          if (!(user.password !== password)) {
            _context2.next = 9;
            break;
          }
          return _context2.abrupt("return", res.status(401).json({
            status: 'error',
            message: 'invalid sign in'
          }));
        case 9:
          return _context2.abrupt("return", res.status(200).json({
            status: 'success',
            message: 'Login successful',
            user: user
          }));
        case 12:
          _context2.prev = 12;
          _context2.t0 = _context2["catch"](1);
          res.status(500).json({
            message: 'Error logging in',
            error: _context2.t0.message
          });
        case 15:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[1, 12]]);
  }));
  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());

// User Logout
router.post('/logout', function (req, res) {
  req.session.destroy(function (err) {
    if (err) {
      return res.status(500).json({
        message: 'Error logging out'
      });
    }
    res.json({
      message: 'Logout successful'
    });
  });
});

// --- USER ROUTES ---

// Fetch all users
router.get('/users', /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var users;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return req.app.locals.userCollection.find().toArray();
        case 3:
          users = _context3.sent;
          res.json(users);
          _context3.next = 10;
          break;
        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          res.status(500).json({
            message: 'Error fetching users',
            error: _context3.t0
          });
        case 10:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 7]]);
  }));
  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());

// Fetch a specific user by ID
router.get('/users/:userID', /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var userID, user;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          userID = parseInt(req.params.userID);
          _context4.prev = 1;
          _context4.next = 4;
          return req.app.locals.userCollection.findOne({
            userID: userID
          });
        case 4:
          user = _context4.sent;
          if (user) {
            _context4.next = 7;
            break;
          }
          return _context4.abrupt("return", res.status(404).json({
            message: 'User not found'
          }));
        case 7:
          res.json(user);
          _context4.next = 13;
          break;
        case 10:
          _context4.prev = 10;
          _context4.t0 = _context4["catch"](1);
          res.status(500).json({
            message: 'Error fetching user',
            error: _context4.t0
          });
        case 13:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[1, 10]]);
  }));
  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}());

// Edit a user profile
router.put('/users/:userID', /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var userID, updatedData, result;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          userID = parseInt(req.params.userID);
          updatedData = req.body; // contains the fields to be updated
          _context5.prev = 2;
          _context5.next = 5;
          return req.app.locals.userCollection.updateOne({
            userID: userID
          }, {
            $set: updatedData
          });
        case 5:
          result = _context5.sent;
          if (!(result.matchedCount === 0)) {
            _context5.next = 8;
            break;
          }
          return _context5.abrupt("return", res.status(404).json({
            message: 'User not found'
          }));
        case 8:
          res.json({
            message: 'User updated successfully'
          });
          _context5.next = 14;
          break;
        case 11:
          _context5.prev = 11;
          _context5.t0 = _context5["catch"](2);
          res.status(500).json({
            message: 'Error updating user',
            error: _context5.t0
          });
        case 14:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[2, 11]]);
  }));
  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}());

// Delete a user profile
router["delete"]('/users/:userID', /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var userID, result;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          userID = parseInt(req.params.userID);
          _context6.prev = 1;
          _context6.next = 4;
          return req.app.locals.userCollection.deleteOne({
            userID: userID
          });
        case 4:
          result = _context6.sent;
          if (!(result.deletedCount === 0)) {
            _context6.next = 7;
            break;
          }
          return _context6.abrupt("return", res.status(404).json({
            message: 'User not found'
          }));
        case 7:
          res.json({
            message: 'User deleted successfully'
          });
          _context6.next = 13;
          break;
        case 10:
          _context6.prev = 10;
          _context6.t0 = _context6["catch"](1);
          res.status(500).json({
            message: 'Error deleting user',
            error: _context6.t0
          });
        case 13:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[1, 10]]);
  }));
  return function (_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}());

// --- PLAYLIST ROUTES ---

// Fetch all playlists
router.get('/playlists', /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var playlists;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _context7.next = 3;
          return req.app.locals.playlistCollection.find().toArray();
        case 3:
          playlists = _context7.sent;
          res.json(playlists);
          _context7.next = 10;
          break;
        case 7:
          _context7.prev = 7;
          _context7.t0 = _context7["catch"](0);
          res.status(500).json({
            message: 'Error fetching playlists',
            error: _context7.t0.message
          });
        case 10:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 7]]);
  }));
  return function (_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}());

// Fetch a specific playlist by ID
router.get('/playlists/:simpleID', /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var simpleID, playlist;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          simpleID = parseInt(req.params.simpleID);
          _context8.prev = 1;
          _context8.next = 4;
          return req.app.locals.playlistCollection.findOne({
            simpleID: simpleID
          });
        case 4:
          playlist = _context8.sent;
          if (playlist) {
            _context8.next = 7;
            break;
          }
          return _context8.abrupt("return", res.status(404).json({
            message: 'Playlist not found'
          }));
        case 7:
          res.json(playlist);
          _context8.next = 13;
          break;
        case 10:
          _context8.prev = 10;
          _context8.t0 = _context8["catch"](1);
          res.status(500).json({
            message: 'Error fetching playlist',
            error: _context8.t0
          });
        case 13:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[1, 10]]);
  }));
  return function (_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}());

// Create a new playlist
router.post('/playlists', /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var newPlaylist, result;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          newPlaylist = req.body;
          _context9.next = 4;
          return req.app.locals.playlistCollection.insertOne(newPlaylist);
        case 4:
          result = _context9.sent;
          res.status(201).json(result.ops[0]);
          _context9.next = 11;
          break;
        case 8:
          _context9.prev = 8;
          _context9.t0 = _context9["catch"](0);
          res.status(500).json({
            message: 'Error creating playlist',
            error: _context9.t0
          });
        case 11:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[0, 8]]);
  }));
  return function (_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}());

// Edit a playlist by ID
router.put('/playlists/:simpleID', /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var simpleID, updatedPlaylist, result;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          simpleID = parseInt(req.params.simpleID);
          updatedPlaylist = req.body;
          _context10.prev = 2;
          _context10.next = 5;
          return req.app.locals.playlistCollection.updateOne({
            simpleID: simpleID
          }, {
            $set: updatedPlaylist
          });
        case 5:
          result = _context10.sent;
          if (!(result.matchedCount === 0)) {
            _context10.next = 8;
            break;
          }
          return _context10.abrupt("return", res.status(404).json({
            message: 'Playlist not found'
          }));
        case 8:
          res.json({
            message: 'Playlist updated'
          });
          _context10.next = 14;
          break;
        case 11:
          _context10.prev = 11;
          _context10.t0 = _context10["catch"](2);
          res.status(500).json({
            message: 'Error updating playlist',
            error: _context10.t0
          });
        case 14:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[2, 11]]);
  }));
  return function (_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}());

// Delete a playlist by ID
router["delete"]('/playlists/:simpleID', /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res) {
    var simpleID, result;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          simpleID = parseInt(req.params.simpleID);
          _context11.prev = 1;
          _context11.next = 4;
          return req.app.locals.playlistCollection.deleteOne({
            simpleID: simpleID
          });
        case 4:
          result = _context11.sent;
          if (!(result.deletedCount === 0)) {
            _context11.next = 7;
            break;
          }
          return _context11.abrupt("return", res.status(404).json({
            message: 'Playlist not found'
          }));
        case 7:
          res.json({
            message: 'Playlist deleted'
          });
          _context11.next = 13;
          break;
        case 10:
          _context11.prev = 10;
          _context11.t0 = _context11["catch"](1);
          res.status(500).json({
            message: 'Error deleting playlist',
            error: _context11.t0
          });
        case 13:
        case "end":
          return _context11.stop();
      }
    }, _callee11, null, [[1, 10]]);
  }));
  return function (_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}());

// --- SONG ROUTES ---

// Fetch all songs
router.get('/songs', /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12(req, res) {
    var songs;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          _context12.prev = 0;
          _context12.next = 3;
          return req.app.locals.songsCollection.find().toArray();
        case 3:
          songs = _context12.sent;
          res.json(songs);
          _context12.next = 10;
          break;
        case 7:
          _context12.prev = 7;
          _context12.t0 = _context12["catch"](0);
          res.status(500).json({
            message: 'Error fetching songs',
            error: _context12.t0
          });
        case 10:
        case "end":
          return _context12.stop();
      }
    }, _callee12, null, [[0, 7]]);
  }));
  return function (_x23, _x24) {
    return _ref12.apply(this, arguments);
  };
}());

// Fetch a specific song by ID
router.get('/songs/:simpleID', /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13(req, res) {
    var simpleID, song;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          simpleID = parseInt(req.params.simpleID);
          _context13.prev = 1;
          _context13.next = 4;
          return req.app.locals.songsCollection.findOne({
            simpleID: simpleID
          });
        case 4:
          song = _context13.sent;
          if (song) {
            _context13.next = 7;
            break;
          }
          return _context13.abrupt("return", res.status(404).json({
            message: 'Song not found'
          }));
        case 7:
          res.json(song);
          _context13.next = 13;
          break;
        case 10:
          _context13.prev = 10;
          _context13.t0 = _context13["catch"](1);
          res.status(500).json({
            message: 'Error fetching song',
            error: _context13.t0
          });
        case 13:
        case "end":
          return _context13.stop();
      }
    }, _callee13, null, [[1, 10]]);
  }));
  return function (_x25, _x26) {
    return _ref13.apply(this, arguments);
  };
}());

// Create a new song
router.post('/songs', /*#__PURE__*/function () {
  var _ref14 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee14(req, res) {
    var newSong, result;
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          _context14.prev = 0;
          newSong = req.body;
          _context14.next = 4;
          return req.app.locals.songsCollection.insertOne(newSong);
        case 4:
          result = _context14.sent;
          res.status(201).json(result.ops[0]);
          _context14.next = 11;
          break;
        case 8:
          _context14.prev = 8;
          _context14.t0 = _context14["catch"](0);
          res.status(500).json({
            message: 'Error creating song',
            error: _context14.t0
          });
        case 11:
        case "end":
          return _context14.stop();
      }
    }, _callee14, null, [[0, 8]]);
  }));
  return function (_x27, _x28) {
    return _ref14.apply(this, arguments);
  };
}());

// Delete a song by ID
router["delete"]('/songs/:simpleID', /*#__PURE__*/function () {
  var _ref15 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee15(req, res) {
    var simpleID, result;
    return _regeneratorRuntime().wrap(function _callee15$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          simpleID = parseInt(req.params.simpleID);
          _context15.prev = 1;
          _context15.next = 4;
          return req.app.locals.songsCollection.deleteOne({
            simpleID: simpleID
          });
        case 4:
          result = _context15.sent;
          if (!(result.deletedCount === 0)) {
            _context15.next = 7;
            break;
          }
          return _context15.abrupt("return", res.status(404).json({
            message: 'Song not found'
          }));
        case 7:
          res.json({
            message: 'Song deleted'
          });
          _context15.next = 13;
          break;
        case 10:
          _context15.prev = 10;
          _context15.t0 = _context15["catch"](1);
          res.status(500).json({
            message: 'Error deleting song',
            error: _context15.t0
          });
        case 13:
        case "end":
          return _context15.stop();
      }
    }, _callee15, null, [[1, 10]]);
  }));
  return function (_x29, _x30) {
    return _ref15.apply(this, arguments);
  };
}());

// --- FRIEND/FOLLOW ROUTES ---

// Follow a user
router.post('/users/:userID/follow', /*#__PURE__*/function () {
  var _ref16 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee16(req, res) {
    var userID, followerID, user;
    return _regeneratorRuntime().wrap(function _callee16$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          userID = parseInt(req.params.userID);
          followerID = req.body.followerID; // The ID of the follower
          _context16.prev = 2;
          _context16.next = 5;
          return req.app.locals.userCollection.findOne({
            userID: userID
          });
        case 5:
          user = _context16.sent;
          if (!(user && !user.followers.includes(followerID))) {
            _context16.next = 13;
            break;
          }
          user.followers.push(followerID);
          _context16.next = 10;
          return req.app.locals.userCollection.updateOne({
            userID: userID
          }, {
            $set: {
              followers: user.followers
            }
          });
        case 10:
          res.json({
            message: 'Followed user',
            user: user
          });
          _context16.next = 14;
          break;
        case 13:
          res.status(404).json({
            message: 'User not found or already followed'
          });
        case 14:
          _context16.next = 19;
          break;
        case 16:
          _context16.prev = 16;
          _context16.t0 = _context16["catch"](2);
          res.status(500).json({
            message: 'Error following user',
            error: _context16.t0
          });
        case 19:
        case "end":
          return _context16.stop();
      }
    }, _callee16, null, [[2, 16]]);
  }));
  return function (_x31, _x32) {
    return _ref16.apply(this, arguments);
  };
}());

// Unfollow a user
router["delete"]('/users/:userID/unfollow', /*#__PURE__*/function () {
  var _ref17 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee17(req, res) {
    var userID, followerID, user;
    return _regeneratorRuntime().wrap(function _callee17$(_context17) {
      while (1) switch (_context17.prev = _context17.next) {
        case 0:
          userID = parseInt(req.params.userID);
          followerID = req.body.followerID; // The ID of the follower
          _context17.prev = 2;
          _context17.next = 5;
          return req.app.locals.userCollection.findOne({
            userID: userID
          });
        case 5:
          user = _context17.sent;
          if (!(user && user.followers.includes(followerID))) {
            _context17.next = 13;
            break;
          }
          user.followers = user.followers.filter(function (id) {
            return id !== followerID;
          });
          _context17.next = 10;
          return req.app.locals.userCollection.updateOne({
            userID: userID
          }, {
            $set: {
              followers: user.followers
            }
          });
        case 10:
          res.json({
            message: 'Unfollowed user',
            user: user
          });
          _context17.next = 14;
          break;
        case 13:
          res.status(404).json({
            message: 'User not found or not following'
          });
        case 14:
          _context17.next = 19;
          break;
        case 16:
          _context17.prev = 16;
          _context17.t0 = _context17["catch"](2);
          res.status(500).json({
            message: 'Error unfollowing user',
            error: _context17.t0
          });
        case 19:
        case "end":
          return _context17.stop();
      }
    }, _callee17, null, [[2, 16]]);
  }));
  return function (_x33, _x34) {
    return _ref17.apply(this, arguments);
  };
}());

// --- SEARCH ROUTES ---

// Search for users
router.get('/search/users', /*#__PURE__*/function () {
  var _ref18 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee18(req, res) {
    var query, users;
    return _regeneratorRuntime().wrap(function _callee18$(_context18) {
      while (1) switch (_context18.prev = _context18.next) {
        case 0:
          query = req.query.q; // The search query
          _context18.prev = 1;
          _context18.next = 4;
          return req.app.locals.userCollection.find({
            name: {
              $regex: query,
              $options: 'i'
            }
          }).toArray();
        case 4:
          users = _context18.sent;
          res.json(users);
          _context18.next = 11;
          break;
        case 8:
          _context18.prev = 8;
          _context18.t0 = _context18["catch"](1);
          res.status(500).json({
            message: 'Error searching users',
            error: _context18.t0
          });
        case 11:
        case "end":
          return _context18.stop();
      }
    }, _callee18, null, [[1, 8]]);
  }));
  return function (_x35, _x36) {
    return _ref18.apply(this, arguments);
  };
}());

// Search for songs
router.get('/search/songs', /*#__PURE__*/function () {
  var _ref19 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee19(req, res) {
    var query, songs;
    return _regeneratorRuntime().wrap(function _callee19$(_context19) {
      while (1) switch (_context19.prev = _context19.next) {
        case 0:
          query = req.query.q; // The search query
          _context19.prev = 1;
          _context19.next = 4;
          return req.app.locals.songsCollection.find({
            title: {
              $regex: query,
              $options: 'i'
            }
          }).toArray();
        case 4:
          songs = _context19.sent;
          res.json(songs);
          _context19.next = 11;
          break;
        case 8:
          _context19.prev = 8;
          _context19.t0 = _context19["catch"](1);
          res.status(500).json({
            message: 'Error searching songs',
            error: _context19.t0
          });
        case 11:
        case "end":
          return _context19.stop();
      }
    }, _callee19, null, [[1, 8]]);
  }));
  return function (_x37, _x38) {
    return _ref19.apply(this, arguments);
  };
}());

// Search for playlists
router.get('/search/playlists', /*#__PURE__*/function () {
  var _ref20 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee20(req, res) {
    var query, playlists;
    return _regeneratorRuntime().wrap(function _callee20$(_context20) {
      while (1) switch (_context20.prev = _context20.next) {
        case 0:
          query = req.query.q; // The search query
          _context20.prev = 1;
          _context20.next = 4;
          return req.app.locals.playlistCollection.find({
            name: {
              $regex: query,
              $options: 'i'
            }
          }).toArray();
        case 4:
          playlists = _context20.sent;
          res.json(playlists);
          _context20.next = 11;
          break;
        case 8:
          _context20.prev = 8;
          _context20.t0 = _context20["catch"](1);
          res.status(500).json({
            message: 'Error searching playlists',
            error: _context20.t0
          });
        case 11:
        case "end":
          return _context20.stop();
      }
    }, _callee20, null, [[1, 8]]);
  }));
  return function (_x39, _x40) {
    return _ref20.apply(this, arguments);
  };
}());

// --- ACTIVITY FEED ROUTES ---

// Fetch user activity feed
router.get('/users/:userID/activity', /*#__PURE__*/function () {
  var _ref21 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee21(req, res) {
    var userID, user, activity;
    return _regeneratorRuntime().wrap(function _callee21$(_context21) {
      while (1) switch (_context21.prev = _context21.next) {
        case 0:
          userID = parseInt(req.params.userID);
          _context21.prev = 1;
          _context21.next = 4;
          return req.app.locals.userCollection.findOne({
            userID: userID
          });
        case 4:
          user = _context21.sent;
          if (user) {
            _context21.next = 7;
            break;
          }
          return _context21.abrupt("return", res.status(404).json({
            message: 'User not found'
          }));
        case 7:
          _context21.next = 9;
          return req.app.locals.playlistCollection.find({
            $or: [{
              addedBy: userID
            }, {
              'friends.userID': userID
            }]
          }).sort({
            createdAt: -1
          }).limit(10) // Limit to the last 10 activities
          .toArray();
        case 9:
          activity = _context21.sent;
          res.json(activity);
          _context21.next = 16;
          break;
        case 13:
          _context21.prev = 13;
          _context21.t0 = _context21["catch"](1);
          res.status(500).json({
            message: 'Error fetching activity',
            error: _context21.t0
          });
        case 16:
        case "end":
          return _context21.stop();
      }
    }, _callee21, null, [[1, 13]]);
  }));
  return function (_x41, _x42) {
    return _ref21.apply(this, arguments);
  };
}());
var _default = exports["default"] = router;