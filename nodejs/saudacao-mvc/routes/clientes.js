const express = require("express")
const router = express.Router()
const clientesController = require('../controllers/clientesController.js')

router.get('/', clientesController.clientes)

module.exports = router