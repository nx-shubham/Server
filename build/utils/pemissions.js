"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateUsers = exports.validEmail = exports.hasPermissions = void 0;
const permissions = {
  'getUsers': {
    all: ['head-trainer'],
    read: ['trainee', 'trainer', 'head-trainer'],
    write: ['trainer', 'head-trainer', 'trainer'],
    delete: []
  }
};

const hasPermissions = (moduleName, role, permissionType) => {
  console.log(role, "<<<<<<df,", permissionType, moduleName);

  if (permissions[moduleName][permissionType].includes(role)) {
    console.log("true");
    return '';
  } else {
    console.log(permissions[moduleName][permissionType].includes(role), '------');
    console.log("false");
    return 'disabled';
  }
};

exports.hasPermissions = hasPermissions;
const regex = /^(\w+)((.([a-zA-Z0-9]+))*)?@(successive.tech)$/;

const validEmail = email => regex.test(email);

exports.validEmail = validEmail;

const validateUsers = (email, usersRole) => {
  const validateUser = usersRole.filter(useremail => useremail.email === email);

  if (validateUser.length) {
    return true;
  } else return false;
};

exports.validateUsers = validateUsers;