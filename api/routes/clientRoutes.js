const { Router } = require('express')
const ClientController = require('../controllers/ClientController')
//const PetsControllers = require('../controllers/PetsControllers')
const router = Router()

router.post('/clients', ClientController.create)
router.get('/clients/:client_id/pets', ClientController.index)

module.exports = router