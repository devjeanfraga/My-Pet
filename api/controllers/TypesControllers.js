const {TypesServices} = require('../services')
const typesServices = new TypesServices('Types')

class TypesControllers {
  static async createType (req, res) {
    const typeBody = req.body
    try {
      const newType = await typesServices.criar(typeBody)
      res.status(201).json(newType)
    } catch (err) {
      console.log(err)
      return res.status(500).json(err)
    }
  }

  static async getAllTypes (req, res) {
    try {
      const alltypes = await typesServices.pegarTodos()
      res.status(200).json(alltypes)
    } catch (err) {
      console.log(err.message)
      return res.status(500).json(err)
    }
  }

  static async resetType (req, res)  {
    const {typesId} = req.params
    const typeBody = req.body
    try {
      const typeUpdated = await typesServices.AtualizarTipo(typeBody, {id: typesId})
      return res.status(200).json(typeUpdated)
    } catch (err) {
      console.log(err)
      return res.status(500).json(err)
    }
  }

  static async removeType (req, res) {
    const {typesId} = req.params
    try {
      await typesServices.deletar({id:typesId})
      return res.status(200).json({message: `tipo de id ${typesId}  deletado com sucesso`})
    } catch (err) {
      console.log(err)
      return res.status(500).json(err)
    }
  }
}

module.exports = TypesControllers