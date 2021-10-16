const {Router} = require('express')
const PetsController = require('../controllers/PetsController')
const storage = require('../config/uploads')
const multer = require('multer')




const  router = Router()
const uploads = multer({storage: storage,}).fields([{name: 'images', maxCount: 6}])

router.post('/clients/:clientId/pets', uploads, PetsController.create)

router.get('/clients/:clientId/pets/:petId', PetsController.index)

router.get('/pets', PetsController.show)

router.post('/clients/:clientId/pets/:petId',uploads , PetsController.update)

router.delete('/clients/:clientId/pets/:petId', PetsController.remove)




module.exports = router 