"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _validateUser = require("./validateUser");

var _mutation = _interopRequireDefault(require("./validateUser/mutation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  Query: { ..._validateUser.Query
  },
  Mutation: { ..._mutation.default
  }
};
exports.default = _default;