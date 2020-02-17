"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mergeGraphqlSchemas = require("merge-graphql-schemas");

var _path = _interopRequireDefault(require("path"));

var _module = _interopRequireDefault(require("./module"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const typesArray = (0, _mergeGraphqlSchemas.fileLoader)(_path.default.join(__dirname, './**/*.graphql'));
const typeDefs = (0, _mergeGraphqlSchemas.mergeTypes)(typesArray, {
  all: true
});
var _default = {
  resolvers: _module.default,
  typeDefs
};
exports.default = _default;