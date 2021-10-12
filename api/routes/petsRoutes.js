const {Router} = require('express')
const PetsController = require('../controllers/PetsController')
const storage = require('../config/uploads')
const multer = require('multer')




const  router = Router()
const uploads = multer({storage: storage,}).fields([{name: 'images', maxCount: 3}])

router.post('/clients/:clientId/pets', PetsController.create)
router.get('/pets/:petId', PetsController.index)
router.get('/pets', PetsController.show)




module.exports = router 