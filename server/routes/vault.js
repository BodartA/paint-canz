const express = require('express')
const router = express.Router()

const vaultController = require('../controllers/vault')

router.post('/', vaultController.createNewVault)
router.get('/', vaultController.loadVaults)

module.exports = router