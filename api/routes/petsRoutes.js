const {Router} = require('express')
const PetsControlller = require('../controllers/PetsController')
const storage = require('../config/uploads')
const multer = require('multer')

const  router = Router()
const uploads = multer({storage})

router.post('/clients/:client_id/pets',PetsControlller.createPet)
router.post('/pets/:pet_id/uploads',uploads.array('images[]', 3), PetsControlller.uploadsPics)

module.exports = router 