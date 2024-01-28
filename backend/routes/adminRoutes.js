const express = require('express')
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware')
const { getAllOrders } = require('../controller/userController')
const router = express.Router()

router.get('/getallorders',authMiddleware,isAdmin,getAllOrders)
module.exports = router