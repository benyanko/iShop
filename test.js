import axios from "axios";

//OrdersController- GET

// @route   GET /api/orders/:id
// @desc    Get order by ID
// @access  Private
async function getOrderByIdTest(id, token){
    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    }
    const { data } = await axios.get(`http://127.0.0.1:5000/api/orders/${id}`, config);
    console.log(data);
}

// @route   GET /api/orders/:id/deliver
// @desc    Update order to delivered
// @access  Private/Admin
async function updateOrderToDeliveredTest(id, token){
    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    }
    const { data } = await axios.get(`http://127.0.0.1:5000/api/orders/${id}/deliver`, config);
    console.log(data)
}

// @route   GET /api/orders/myorders
// @desc    Get logged in user orders
// @access  Private
async function getMyOrdersTest(token){
    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    }
    const { data } = await axios.get(`http://127.0.0.1:5000/api/orders/myorders`, config);
    console.log(data)
}

// @route   GET /api/orders
// @desc    Get all orders
// @access  Private/Admin
async function getOrdersTest(token){
    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    }
    const { data } = await axios.get(`http://127.0.0.1:5000/api/orders`, config);
    consle.log(data)
}

//OrdersController- POST

// @route   POST /api/orders
// @desc    Create new order
// @access  Private
async function addOrderItemsTest(orderItems, shippingAddress, itemsPrice, shippingPrice, totalPrice, token){
    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    }
    let orderDetails = {orderItems: orderItems , shippingAddress: shippingAddress, itemsPrice: itemsPrice, shippingPrice: shippingPrice, totalPrice: totalPrice}
    const { data } = await axios.post(`http://127.0.0.1:5000/api/orders`, orderDetails, config);
    console.log(data)
}




//ProductController

// @router  GET api/products
// @desc    Get all products
// @access  Public
async function getProductTest(token){
    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    }
    const { data } = await axios.get(`http://127.0.0.1:5000/api/products`, config);
    console.log(data)
}

// @router  GET api/products/:id
// @desc    Get single product
// @access  Public
async function getProductByIdTest(id, token){
    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    }
    const { data } = await axios.get(`http://127.0.0.1:5000/api/products${id}`, config);
    console.log(data)
}

//UserController- GET


// @router  GET api/users/profile
// @desc    Get user profile
// @access  Private
async function getUserProfileTest(token){
    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    }
    const { data } = await axios.get(`http://127.0.0.1:5000/api/users/profile`, config);
    console.log(data)
}

// @desc    Get all users
// @route   GET /api/users
// @access  Private/Admin
async function getUsersTest(token){
    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    }
    const { data } = await axios.get(`http://127.0.0.1:5000/api/users`, config);
    console.log(data)
}


//UserController- POST

// @router  POST api/users/login
// @desc    Auth user & get token
// @access  Public
async function authUserTest(email, password){
    let details = {email: email, password: password}
    const { data } = await axios.post(`http://127.0.0.1:5000/api/users`, details);
    console.log(data)
}

// @router  POST api/users
// @desc    Register new user
// @access  Public
async function registerUserTest(name, email, password){
    let details = {name: name, email: email, password: password};
    const { data } = await axios.get(`http://127.0.0.1:5000/api/users`, details, config);
    console.log(data)
}