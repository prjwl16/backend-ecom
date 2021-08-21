var express = require('express')
var router = express.Router()
const {addProducts,showAllProducst,getProductId,allOrders} = require("../controllers/product")
const {isSignedIn,isAuthenticated,isOwner} = require("../controllers/auth")
const { getUserById,orderProduct } = require('../controllers/user')

router.param("userId",getUserById)
router.param("productId",getProductId)

router.get("/addproduct/:userId",isSignedIn,isAuthenticated,isOwner,addProducts)
router.get("/products",showAllProducst)
router.post("/order/:userId/:productId",isSignedIn,isAuthenticated,orderProduct)
router.get("/orders/:userId",isSignedIn,isAuthenticated,allOrders)


module.exports=router