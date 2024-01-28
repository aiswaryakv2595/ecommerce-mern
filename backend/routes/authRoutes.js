const express = require('express')
const { createUser, loginCtrl, getAllUser, getaUser, deleteaUser, updateaUser, blockUser, unblockUser, handleRefreshToken, logout, updatePassword, forgotPasswordToken, resetPassword, loginAdmin, getWishlist, saveAddress, userCart, getUserCart, emptyCart, applyCoupon, createOrder, getOrders, updateOrderStatus, getAllOrders } = require('../controller/userController')
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware')
const router = express.Router()

router.post('/register',createUser)
router.post('/login',loginCtrl)
router.post('/admin-login',loginAdmin)
router.put('/password',authMiddleware,updatePassword)
router.post('/forgot-password-token',forgotPasswordToken)
router.put('/reset-password/:token',resetPassword)

router.get('/all-users',getAllUser)
// router.get('/getallorders',authMiddleware,isAdmin,getAllOrders)
router.get('/refresh',handleRefreshToken)
router.get('/logout',logout)
router.get('/wishlist',authMiddleware,getWishlist)
router.get('/cart',authMiddleware,getUserCart)
router.post('/cart',authMiddleware,userCart)
router.delete('/empty-cart',authMiddleware,emptyCart)

router.post('/cart/applycoupon',authMiddleware,applyCoupon)
router.post('/cart/cash-order',authMiddleware,createOrder)

router.get('/get-orders',authMiddleware,getOrders)


router.get('/:id',authMiddleware,isAdmin,getaUser)

router.put('/order/update-order/:id',authMiddleware,isAdmin,updateOrderStatus)


router.delete('/:id',deleteaUser)
router.put('/edit-user',authMiddleware,updateaUser)
router.put('/save-address',authMiddleware,saveAddress)
router.put('/block-user/:id',authMiddleware,isAdmin,blockUser)
router.put('/unblock-user/:id',authMiddleware,isAdmin,unblockUser)

module.exports = router