const {PetsServices} = require('../services')
const petsServices = new PetsServices('Pets')

class PetsControllers {
  static async createPet (req, res) {
    const {peopleId} = req.params
    const newPet = {...req.body, owner_ID: Number(peopleId) }

    try {
      const petCreated = await petsServices.criar(newPet)
      return res.status(201).json(petCreated) 
    }catch (err) {
      console.log(err.message)
      return res.status(500).json(err.message)
    }
  }

  static async resetPet (req, res) {
    const {peopleId, petsId} = req.params
    const infosBody = req.body
    try{
      await petsServices.atualizarRegistros(infosBody, {id: Number(petsId), owner_ID: Number(peopleId)})
      const petUpdated = await petsServices.pegarUm(petsId)
      return res.status(200).json(petUpdated )
    }catch (err) {
      console.log(err.message)
      return res.status(500).json(err.message)
    }
  }

  static async  getAllPets (req, res) {
    try {
      const allPets = await petsServices.pegarTodos()
      return res.status(200).json(allPets)
    }catch (err) {
      console.log(err.message)
      return res.status(500).json(err.message)
    }
  }

  static async removePet (req, res) {
    const {petsId} = req.params
    try {
      await petsServices.deletar(petsId)
      return res.status(200).json({message: `O cadastro do Pet id ${petsId} foi deletado com sucesso`})
    }catch (err) {
      console.log(err.message)
      return res.status(500).json(err.message)
    }
  }

 static async getOnePet (req, res) {
    const { petsId } = req.params
    try {
      const pet =await petsServices.pegarUm(petsId)
      return res.status(200).json(pet)
    }catch (err) {
      console.log(err.message)
      return res.status(500).json(err.message)
    }

  }


  static async getPetsByOwner (req, res) {
    const {peopleId} = req.params
    try {
      const allPets = await petsServices.econtrarEContar({owner_ID: Number(peopleId)}, {limit: 3})
      res.status(200).json(allPets)
    }catch (err) {
      console.log(err)
      return res.status(500).json(err)
    }
  }

}

module.exports = PetsControllers