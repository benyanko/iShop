import asyncHandler from "express-async-handler";
import Product from "../models/ProductModel.js";


// @router  GET api/products
// @desc    Get all products
// @access  Public
const getProduct =  asyncHandler ( async (req, res) => {
    const keyword = req.query.keyword
        ? {
            name: {
                $regex: req.query.keyword,
                $options: 'i',
            },
        }
        : {}

    const products = await Product.find({ ...keyword })
    return res.json(products)
})

// @router  GET api/products/:id
// @desc    Get single products
// @access  Public
const getProductById =  asyncHandler ( async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (product) {
        res.json(product)
    } else {
        res.status(404)
        throw new Error('Product not found')
    }
})

export {
    getProduct,
    getProductById
}
