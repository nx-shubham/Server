"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.httpServer = exports.server = void 0;

var _apolloServerExpress = require("apollo-server-express");

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _express = _interopRequireDefault(require("express"));

var _http = _interopRequireDefault(require("http"));

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-unneeded-ternary */
const graphqlExpress = require('express-graphql');

// import configurations from './config/configuration';
// import authMiddleware from './lib/authMiddleware';
const app = (0, _express.default)();
const server = new _apolloServerExpress.ApolloServer({
  schema: (0, _apolloServerExpress.makeExecutableSchema)(_.default)
});
exports.server = server;
server.applyMiddleware({
  app
});

const httpServer = _http.default.createServer(app);

exports.httpServer = httpServer;
server.installSubscriptionHandlers(httpServer);
httpServer.listen(4000, () => {
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`); // eslint-disable-line 
});