import {usersRole} from '../../lib/mockData';
import {hasPermissions,validEmail,validateUsers} from '../../utils/pemissions';
import {  ApolloReeor, ApolloError} from 'apollo-server-express';

const Query = {
    getUserDetails: async () => {
        return usersRole
    },
    getUser: async (_, args) => {
        try {
            const { email, role } = args.data;
            const vaildate = validEmail(email);
            console.log('validate', vaildate)
            if(vaildate === true) {
                const res = validateUsers(email,usersRole)
                console.log('>22>>', res)
                if(res === true){
                    const permissionArray ={
                        read: hasPermissions('getUsers', role, 'read'),
                        write: hasPermissions('getUsers', role, 'write'),
                        delete: hasPermissions('getUsers', role, 'delete'),
                        error: null
                    }
                    return permissionArray;
                }
                else throw new Error("DB is not matched")
            }
            else {
                throw new Error("Email is invalid")
            }
    
        } catch (err) {
            console.log('error', err)
            throw new ApolloError(err)
        }
}
};

export default Query;