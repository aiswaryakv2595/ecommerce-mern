const express = require('express')
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware')
const { createEnquiry, updateEnquiry, deleteEnquiry, getEnquiry, getAllEnquiry } = require('../controller/enqController')
const router = express.Router()

router.post('/',createEnquiry)
router.put('/:id',authMiddleware,isAdmin,updateEnquiry)
router.delete('/:id',authMiddleware,isAdmin,deleteEnquiry)
router.get('/:id',authMiddleware,isAdmin,getEnquiry)
router.get('/',getAllEnquiry)

module.exports = router