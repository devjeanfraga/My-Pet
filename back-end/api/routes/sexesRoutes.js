const {Router}  = require('express')
const router = Router()
const SexesController = require('../controllers/SexesController')

router.post('/createGender', SexesController.create)

module.exports = router