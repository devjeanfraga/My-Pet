const database = require('../models')
const PetsDto = require('../DTO/PetsDto')
const {SerialPets} = require('../serial/Serializer')
const serializer = new SerialPets()

class PetsController {

  static async create (req, res) {
    const client_id = req.params.clientId
    const {name, age, breed, weight, gender } = req.body
    const images = req.files.images

    try{
     
      const pet = {name, age, breed, weight, client_id: Number(client_id), gender, images }
      const newPet = new PetsDto(pet)
      await newPet.createPet()
  
      const petCreated = await newPet.findIndex(newPet.id, {include:['sexes','pet']})

      return res.status(201).json(petCreated)

    }catch(err) {
      console.log(err)
    }
  }

  static async index (req, res) {
    const {petId} =  req.params

    try {
      const pet = new PetsDto({id:Number(petId)})
      await pet.findIndex()

      if(!pet) {
        return res.json({message: "not found"})
      }

      return res.status(200).json(pet)

    }catch (err){
      console.log(err)
    }
  }

  static async show (req, res) {
    try {
        const allPets =  await database.Pets.findAll()
        return res.status(200).json(allPets)
    }catch(err){
 console.log(err)
    }
  }

  static async update (req, res) {
    const {petId, clientId} = req.params
    const{name, age, breed, weight, gender } = req.body
    const images = req.files.images 
    

    try {
      const dataPet = {name: name, age:age, breed: breed, weight: weight, gender: gender, id:petId ,  client_id: clientId, images: images}
      const pet =  new PetsDto(dataPet)
      await pet.updatePet()
      const updatedPet = await pet.findIndex()
  
      return res.status(200).json(updatedPet)
  
    }catch (err) {
      console.log(err)
    }
    
  }
  
}

module.exports = PetsController


/*
      const pet = await database.Pets.findByPk(newPet.pet_id
        , {include: 'pet'})
*/