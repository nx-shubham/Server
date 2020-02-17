"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mockData = require("../../lib/mockData");

var _pemissions = require("../../utils/pemissions");

var _apolloServerExpress = require("apollo-server-express");

const Query = {
  getUserDetails: async () => {
    return _mockData.usersRole;
  },
  getUser: async (_, args) => {
    try {
      const {
        email,
        role
      } = args.data;
      const vaildate = (0, _pemissions.validEmail)(email);
      console.log('validate', vaildate);

      if (vaildate === true) {
        const res = (0, _pemissions.validateUsers)(email, _mockData.usersRole);
        console.log('>22>>', res);

        if (res === true) {
          const permissionArray = {
            read: (0, _pemissions.hasPermissions)('getUsers', role, 'read'),
            write: (0, _pemissions.hasPermissions)('getUsers', role, 'write'),
            delete: (0, _pemissions.hasPermissions)('getUsers', role, 'delete'),
            error: null
          };
          return permissionArray;
        } else throw new Error("DB is not matched");
      } else {
        throw new Error("Email is invalid");
      }
    } catch (err) {
      console.log('error', err);
      throw new _apolloServerExpress.ApolloError(err);
    }
  }
};
var _default = Query;
exports.default = _default;