const Product = require("../models/product")
const Order = require("../models/order")

exports.addProducts = (req, res) => {

    //pass the product details in reqest body

    const product = new Product(req.body)
    product.save((err, data) => {
        if (err) return res.status(400).json({ error: "Not able to store Product" })
        else {
            res.status(200).json({data})
        }
    })
}

exports.showAllProducst = (req, res) => {

    //show all products to anyone who visits

    Product.find((err, producsts) => {
        if (err) return res.status(400).json({ error: "No products found" })
        else {
            res.status(200).json({ producsts })
        }
    })
}

exports.getProductId = (req, res, next, id) => {

    Product.findById(id).exec((err, data) => {
        if (err) {
            return res.status(400).json({
                error: "Invalide Product"
            })
        } else {
            req.product = data
            next()
        }
    })
}

exports.allOrders = (req, res) => {

    //if owner --> return all orders 
    //else return order by specific user


    if (req.profile.role == 0) {
        if (req.profile.orders) {
            Order.find({ customer_id: req.profile._id }, (err, doc) => {
                return res.json({doc})
            })

        }
    }
    if (req.profile.role == 1) {
        Order.find((err, doc) => {
            return res.json(doc)
        })
    }
}