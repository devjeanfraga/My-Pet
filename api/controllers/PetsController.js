const database = require('../models')
const PetsViews = require('../views/PetsViews')

class PetsController {

  static async create (req, res) {

    try{
      const {clientId}= req.params
      const {name, age, breed, weight} = req.body


      //Pegar o id do cliente para criar um novo pet
      const client = await database.Clients.findByPk(Number(clientId)) 
      if(!client) {
        return res.json({message: 'not found Client'})
      }


      //Requisição de dados table Pets
      const data = {name, age, breed, weight, client_id}
      const pet = await database.Pets.create(data)
      
        if(!pet) {
          return res.status(400).json({mensagem: "Opa ! você informou algo que não consigo entender"})
        }
      

      //Encontrar ou Criar o sexo do Animal 
      const gender = req.body.gender
      const[boos]= await database.Sexes.findOrCreate({ where: {gender}})
      await pet.addSex(boos)
      

      //Upload de imagens
      const reqImages = req.files.images
      const images = reqImages.map(image =>{return {path: image.filename, pet_id: pet.id}})
      await database.Images.bulkCreate(images)
      const newPet = await database.Pets.findByPk(pet.id, {include:['sexes','pet' ]}) 
     
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