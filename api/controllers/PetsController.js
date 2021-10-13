const database = require('../models')
const PetsDto = require('../DTO/PetsDto')
const {SerialPets} = require('../serial/Serializer')
const serializer = new SerialPets()

class PetsController {

  static async create (req, res) {
    const client_id = req.params.clientId
    const {name, age, breed, weight, gender } = req.body

    try{
     
      

      const images = req.files.images
      //const files = images.map(image =>{return {path: image.filename }})

      
      const pet = {name, age, breed, weight, client_id: Number(client_id), gender, images }
      const newPet = new PetsDto(pet)
      await newPet.createPet()
      

      //const pet = await database.Pets.create(data)

      //const[boos]= await database.Sexes.findOrCreate({ where: {gender}})
      //await pet.addSex(boos)

      //Upload de imagens

      //await database.Images.bulkCreate(images)

     //const petCreated = await database.Pets.findByPk( newPet.id , {include:['sexes','pet']}) 
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

  
}

module.exports = PetsController


/*
      const pet = await database.Pets.findByPk(newPet.pet_id
        , {include: 'pet'})
*/