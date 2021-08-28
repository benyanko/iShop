import axios from "axios"

//OrdersController- GET

// @desc    Get order by ID
// @route   GET /api/orders/:id
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

// @desc    Update order to delivered
// @route   GET /api/orders/:id/deliver
// @access  Private/Admin
async function updateOrderToDeliveredTest(id, token){
    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    }
    const res = await axios.get(`http://localhost:3000/api/orders/${id}/deliver`, config);
    if(res && res.ok){
        const result = await res.json();
        console.log(result);
    }
    else{
        console.log("Not found id")
    }
}

// @desc    Get logged in user orders
// @route   GET /api/orders/myorders
// @access  Private
async function getMyOrdersTest(token){
    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    }
    const res = await axios.get(`http://localhost:3000/api/orders/myorders`, config);
    if(res && res.ok){
        const result = await res.json();
        console.log(result);
    }
    else{
        console.log("Orders not found")
    }
}

// @desc    Get all orders
// @route   GET /api/orders
// @access  Private/Admin
async function getOrdersTest(token){
    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    }
    const res = await axios.get(`http://localhost:3000/api/orders`, config);
    if(res && res.ok){
        const result = await res.json();
        console.log(result);
    }
    else{
        console.log("Orders not found")
    }
}

//OrdersController- POST

// @desc    Create new order
// @route   POST /api/orders
// @access  Private
async function addOrderItemsTest(orderItems, shippingAddress, itemsPrice, shippingPrice, totalPrice, token){
    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    }
    let orderDetails = {orderItems, shippingAddress, itemsPrice, shippingPrice, totalPrice}
    const res = await axios.post(`http://localhost:3000/api/orders`, orderDetails, config);
    if(res && res.ok){
        const result = await res.json();
        console.log(result);
    }
    else{
        console.log("Orders not found")
    }
}




//ProductController

// @router  GET api/products
// @desc    Get all products
// @access  Public
async function getProductTest(){
    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    }
    const res = await axios.get(`http://localhost:3000/api/products`, config);
    if(res && res.ok){
        const result = await res.json();
        console.log(result);
    }
    else{
        console.log("Products not found")
    }
}

// @router  GET api/products/:id
// @desc    Get single products
// @access  Public
async function getProductByIdTest(id, token){
    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    }
    const res = await axios.get(`http://localhost:3000/api/products${id}`, config);
    if(res && res.ok){
        const result = await res.json();
        console.log(result);
    }
    else{
        console.log("Products not found")
    }
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
    const res = await axios.get(`http://localhost:3000/api/users/profile`, config);
    if(res && res.ok){
        const result = await res.json();
        console.log(result);
    }
    else{
        console.log("Products not found")
    }
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
    const res = await axios.get(`http://localhost:3000/api/users`, config);
    if(res && res.ok){
        const result = await res.json();
        console.log(result);
    }
    else{
        console.log("Products not found")
    }
}


//UserController- POST

// @router  POST api/users/login
// @desc    Auth user & get token
// @access  Public
async function authUserTest(email, password){
    let data = {email, password}
    const res = await axios.post(`http://localhost:3000/api/users`, data);
    if(res && res.ok){
        const result = await res.json();
        console.log(result);
    }
    else{
        console.log("Products not found")
    }
}


async function registerUserTest(name, email, password, token){
    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    }
    let data = {name, email, password};
    const res = await axios.get(`http://localhost:3000/api/users`, data, config);
    if(res && res.ok){
        const result = await res.json();
        console.log(result);
    }
    else{
        console.log("Products not found")
    }
}