import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Ohad',
        email: 'admin@mail.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Ben',
        email: 'ben@mail.com',
        password: bcrypt.hashSync('123456', 10)
    },
    {
        name: 'Yuval',
        email: 'yuval@mail.com',
        password: bcrypt.hashSync('123456', 10)
    }
]

export default users