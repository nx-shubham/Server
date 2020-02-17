"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mockData = require("../../lib/mockData");

const Mutation = {
  addUser: (parent, {
    email,
    role
  }) => {
    const temp = {
      email,
      role
    };

    _mockData.usersRole.push(temp);

    return temp;
  }
};
var _default = Mutation;
exports.default = _default;