const { Router } = require('express')
const ClientsController = require('../controllers/ClientsController')

const router = Router()

router.post('/clients', ClientsController.create)
router.get('/clients', ClientsController.show)
router.get('/clients/:clientId', ClientsController.index)
router.put('/clients/:clientId', ClientsController.update)
router.delete('/clients/:clientId', ClientsController.remove)
router.post('/clients/:clientId/restore', ClientsController.restore)




module.exports = router