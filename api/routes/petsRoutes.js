const {Router} = require('express')
const PetsControlller = require('../controllers/PetsController')
const storage = require('../config/uploads')
const multer = require('multer')

const  router = Router()
const uploads = multer({storage: storage,}).fields([{name: 'images', maxCount: 3}])

router.post('/clients/:client_id/pets',uploads, PetsControlller.create)


module.exports = router 