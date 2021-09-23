const {Router} = require('express')
const TypesControllers = require('../controllers/TypesControllers')
const router = Router()

router.post('/types', TypesControllers.createType)
router.get('/types', TypesControllers.getAllTypes)
router.put('/types/:typesId', TypesControllers.resetType)
router.delete('/types/:typesId', TypesControllers.removeType)

module.exports = router