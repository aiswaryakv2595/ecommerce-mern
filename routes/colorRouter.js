const express = require('express')
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware')
const { createColor, updateColor, deleteColor, getColor, getAllColor } = require('../controller/colorController')
const router = express.Router()

router.post('/',authMiddleware,isAdmin,createColor)
router.put('/:id',authMiddleware,isAdmin,updateColor)
router.delete('/:id',authMiddleware,isAdmin,deleteColor)
router.get('/:id',authMiddleware,isAdmin,getColor)
router.get('/',getAllColor)

module.exports = router