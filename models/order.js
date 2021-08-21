const mongoose = require("mongoose")
const schema = mongoose.Schema

const OrderSchema = new schema({
    product_id: String,
    product_name: String,
    customer_name: String,
    customer_id: String,
},{timestamps:true})

module.exports = mongoose.model("Order",OrderSchema)