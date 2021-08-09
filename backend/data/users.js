import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin',
        email: 'admin@mail.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Jhon',
        email: 'Jhon@mail.com',
        password: bcrypt.hashSync('123456', 10)
    },
    {
        name: 'Bob',
        email: 'Bob@mail.com',
        password: bcrypt.hashSync('123456', 10)
    }
]

export default users