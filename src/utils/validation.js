const usersRole = [
    {
        email: 'shubham.mishra@successive.tech',
        role: 'trainee',
    },
    {
        email: 'vishali.s@successive.tech',
        role: 'head-trainee',
    }, {
        email: 'sunil.sahoo@successive.tech',
        role: 'reviewer',
    }, {
        email: 'satish.maurya@successive.tech',
        role: 'trainee',
    }, {
        email: 'shriya.pathak@successive.tech',
        role: 'trainee',
    },
];

const valid = [];
const inValid = [];
const regex = /^(\w+)((.([a-zA-Z0-9]+))*)?@(successive.tech)$/;
const validEmail = (email) => regex.test(email);

const validateUsers = (usersRole) => {
    usersRole.forEach(({ email}) => {
        if(validEmail(email)){
            valid.push(email)
        } else{
            inValid.push(email   )
        }
    })
};
validateUsers(usersRole);
