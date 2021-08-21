const User = require("../models/user")
const Product = require("../models/product")
const Order = require("../models/order")

exports.getUserById = (req, res, next, id) => {
    User.findById(id).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: "No User Found"
            })
        }
        req.profile = user
        next()
    })
}

exports.orderProduct = (req, res) => {

    // step 1) find product and update stock value
    // stet 2) save the order in orders collection
    // step 3) add product id to user profile

    if (req.product && req.profile) {

        Product.findByIdAndUpdate(req.product._id, { stock: req.product.stock - 1 }, (err, product) => {
            if (err) {
                return res.json({
                    error: "out of stock"
                })
            }
        })

        let order = {
            product_id: req.product._id,
            product_name: req.product.name,
            customer_name: req.profile.name,
            customer_id: req.profile._id
        }

        const newOrder = new Order(order)
        newOrder.save((err, result) => {
            if (err) {
                return res.json({
                    error: "Not able to order ptoduct"
                })
            }
        })

        User.findByIdAndUpdate(req.profile._id, { $push: { orders: req.product._id } }, (err, product) => {
            if (err) {
                return res.json({
                    error: "Not able to order product"
                })
            }
            else {
                return res.status(200).json({ order: product.orders })
            }
        })
    }
    else{
        res.json({
            error:"Something went wrong"
        })
    }
}