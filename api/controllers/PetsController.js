const database = require('../models')

class PetsControlller {

  static async create (req, res) {

    try{
      const {client_id}= req.params
      const {name, age, breed, weight} = req.body
      //Pegar o id do cliente para criar um novo pet
      const client = await database.Clients.findByPk(Number(client_id)) 
      if(!client) {
        return res.json({message: 'not found Client'})
      }
      //Req. de dados
      const data = {name, age, breed, weight, client_id}
      const pet = await database.Pets.create(data)
        if(!pet) {
          return res.status(400).json({mensagem: "Opa ! você informou algo que não consigo entender"})
        }
       
      const gender = req.body.gender
      const[boos]= await database.Sexes.findOrCreate({
        where: {gender}
      })
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


  

  
}

module.exports = PetsControlller


/*
      const pet = await database.Pets.findByPk(newPet.pet_id
        , {include: 'pet'})
*/