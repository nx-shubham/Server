
const permissions = {
    'getUsers': {
        all: ['head_trainer'],
        read: ['trainee', 'trainer', 'head_trainer'],
        write: ['trainer', 'head_trainer', 'trainer'],
        delete: [],
    }
}
export const hasPermissions =   (moduleName, role, permissionType) => {
    // console.log(role, "<<<<<<df,", permissionType, moduleName)
    if (permissions[moduleName][permissionType].includes(role)) {
        // console.log("true")
        return '';
    } else {
        // console.log(permissions[moduleName][permissionType].includes(role), '------');
        // console.log("false")
        return 'disabled';
    }
}

const regex = /^(\w+)((.([a-zA-Z0-9]+))*)?@(successive.tech)$/;
export const validEmail = (email) => regex.test(email);

export const validateUsers = (email, usersRole) => {
    const  validateUser = usersRole.filter(useremail => useremail.email === email);
    if(validateUser.length) {
        return true;
    } else return false
};