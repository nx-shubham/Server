import { usersRole } from '../../lib/mockData';

const Mutation = {
    addUser: ( parent, {email, role}) => {
        const temp = {email, role}
        usersRole.push(temp)
        return temp;
    }
}

export default Mutation;