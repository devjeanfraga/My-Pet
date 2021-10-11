const database = require('../models')
const PetsServices = require('../services/PetsServices')
const petServices = new PetsServices('Pets')

class PetsController {

  static async create (req, res) {

    try{
      /***** Verificar a existencia do Dono do pet *****/
      const {clientId}= req.params
      const client = await database.Clients.findByPk(Number(clientId)) 
      if(!client) {
        return res.json({message: 'not found Client'})
      }

      /***** Requisição de dados do Pets *****/
      const formPet = {name: req.body.name, age: req.body.age, breed: req.body.breed, weight: req.body.weight, client_id: clientId}
      //const pet = await database.Pets.create(data)


      /*****Encontrar ou Criar o sexo do Animal *****/ 
      const formGender = req.body.gender
      //const[boos]= await database.Sexes.findOrCreate({ where: {gender}})
      //await pet.addSex(boos)
      

      //Upload de imagens
      const reqImages = req.files.images
      const formImages = reqImages.map(image =>{return {path: image.filename }})
      //await database.Images.bulkCreate(images)


      /***********CRIAÇAO DO PET**********/ 

      const op = petServices.criePet(formPet,{gender:formGender}, formImages)




      const newPet = await database.Pets.findByPk( op.animal.pet.id , {include:['sexes','pet']}) 
     
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