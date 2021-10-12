const database = require('../models')
const PetsDto = require('../DTO/PetsDto')


class PetsController {

  static async create (req, res) {
    const client_id = req.params.clientId
    const {name, age, breed, weight, gender } = req.body

    try{
     
      

      const reqImages = req.files.images
      const images = reqImages.map(image =>{return {path: image.filename }})

      
      const Pet = {name, age, breed, weight, client_id: Number(client_id), gender, }
      const newPet = new PetsDto(Pet)
      await newPet.createPet()
      

      //const pet = await database.Pets.create(data)

      //const[boos]= await database.Sexes.findOrCreate({ where: {gender}})
      //await pet.addSex(boos)

      //Upload de imagens

      //await database.Images.bulkCreate(images)

      //const newPet = await database.Pets.findByPk( op.animal.pet.id , {include:['sexes','pet']}) 
     
      return res.status(201).json(newPet)
    }catch(err) {
      console.log(err)
    }
  }

  static async index (req, res) {
    const {petId} =  req.params
    try {
      const pet = await database.Pets.findByPk(petId, {include:['sexes','pet' ]})
      if(!pet) {
        return res.json({message: "not found"})
      }
      
      return res.status(201).json(pet)
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