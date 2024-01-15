const express = require('express');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');
const { createCoupon, getAllCoupon, updateCoupon, deleteCoupon, getCoupon } = require('../controller/couponController');
const router = express.Router();

router.post('/',authMiddleware,isAdmin,createCoupon)
router.get('/',authMiddleware,isAdmin,getAllCoupon)
router.put('/:id',authMiddleware,isAdmin,updateCoupon)
router.delete('/:id',authMiddleware,isAdmin,deleteCoupon)
router.get('/:id',authMiddleware,isAdmin,getCoupon)

module.exports = router