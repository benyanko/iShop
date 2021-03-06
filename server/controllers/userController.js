import asyncHandler from 'express-async-handler';
import User from '../models/UserModel.js';
import generateToken from '../utils/generateToken.js';


// @router  POST api/users/login
// @desc    Auth user & get token
// @access  Public
const authUser =  asyncHandler ( async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if(user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    } else {
        res.status(401)
        throw new Error('Invalid email or password')
    }
})

// @router  GET api/users/profile
// @desc    Get user profile
// @access  Private
const getUserProfile =  asyncHandler ( async (req, res) => {
    const user = await User.findById(req.user._id)

    if (user) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    } else {
        res.status(404)
        throw new Error('User not found')
    }
})

// @router  POST api/users
// @desc    Register new user
// @access  Public
const registerUser =  asyncHandler ( async (req, res) => {
    const { name, email, password } = req.body
    const userExists = await User.findOne({ email })

    if (userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    const user = await User.create({
        name,
        email,
        password
    })

    if(user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})

// @desc    Get all users
// @route   GET /api/users
// @access  Private/Admin
const getUsers = asyncHandler(async (req, res) => {
    const keyword = req.query.keyword
        ? {
            name: {
                $regex: req.query.keyword,
                $options: 'i',
            },
        }
        : {}

    const users = await User.find({ ...keyword })
    res.json(users)
})


export {
    authUser,
    getUserProfile,
    registerUser,
    getUsers
}