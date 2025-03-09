const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth')
const authMiddleware = require('../middleware/auth')

router.get('/check', authMiddleware, authController.check)

module.exports = router
