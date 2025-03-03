const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')

const vaultController = require('../controllers/vault')

router.post('/', auth, vaultController.createNewVault)
router.get('/', auth, vaultController.loadVaults)

module.exports = router