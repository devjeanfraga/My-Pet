const database = require('../models')

class PetsControlller {

  static async createPet (req, res) {
    const {client_id}= req.params
    const {name, age, breed, weight} = req.body
    
    try{
      const client = await database.Clients.findByPk(Number(client_id)) 

      if(!client) {
        return res.json({message: 'not found Client'})
      }

      const data = {name, age, breed, weight, client_id}
      const newPet = await database.Pets.create(data)

      return res.status(201).json(newPet)
    }catch(err) {
      console.log(err)
    }
  }

  static async uploadsPics (req, res) {
    const {pet_id} = req.params
    const reqImages =  req.files
  
    try{
      const pet = await database.Pets.findByPk(Number(pet_id))
      if(!pet) {return res.status(404).json({message:"Id não encontrado"})}

      const images = reqImages.map(image =>{ return {path: image.filename}})

      const uploadsPics = {images, pet_id:pet_id}
      await database.Images.create(uploadsPics)

      return res.status(200).json({message: "Download Efetuado com sucesso."})
    }catch(err){
      console.log(err)
    }
  }
  

  
}

module.exports = PetsControlller


/*
      const pet = await database.Pets.findByPk(newPet.pet_id
        , {include: 'pet'})
*/