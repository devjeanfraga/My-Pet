const { Router } = require('express')
const ClientsController = require('../controllers/ClientController')
const ClientController = require('../controllers/ClientController')
//const PetsControllers = require('../controllers/PetsControllers')
const router = Router()

router.post('/clients', ClientController.create)
router.get('/clients/:clientId', ClientController.index)
router.get('/clients', ClientsController.show)

module.exports = router