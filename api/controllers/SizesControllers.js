const {SizesServices} = require('../services')
const sizesServices = new SizesServices('Sizes')

class SizesControllers {
  static async createSize (req, res) {
    const sizeBody = req.body
    try {
      const newSize = await sizesServices.criar(sizeBody)
      return res.status(201).json(newSize)
    } catch (err) {
      console.log(err)
      return res.status(500).json(err)
    }
  }

  static async getAllSizes (req, res) {
    try {
      const allSizes =  await sizesServices.pegarTodos()
      return res.status(200).json(allSizes)
    } catch (err) {
      console.log(err)
      return res.status(500).json(err)
    }

  }

  static async resetSize (req, res) {
    const {sizesId} = req.params
    const sizeBody = req.body
    try {

      const sizeUpdated = await sizesServices.atualizarSizes(sizeBody, {id: Number(sizesId)})
      return res.status(200).json(sizeUpdated)
    } catch (err) {
      console.log(err)
      return res.status(500).json(err)
    }
  } 

  static async removeSize (req, res) {
    const {sizesId} = req.params
    try {
      await sizesServices.deletar({id: Number(sizesId)})
      return res.status(200).json({message: `Porte de id ${sizesId}  deletado com sucesso`})
    } catch (err) {
      console.log(err)
      return res.status(500).json(err)
    }
  }

 }


 module.exports = SizesControllers