const {Router} = require('express')
const SizesControllers = require('../controllers/SizesControllers')
const router = Router()

router
  .post('/sizes', SizesControllers.createSize)
  .get('/sizes', SizesControllers.getAllSizes )
  .put('/sizes/:sizesId', SizesControllers.resetSize)
  .delete('/sizes/:sizesId', SizesControllers.removeSize)

module.exports = router


