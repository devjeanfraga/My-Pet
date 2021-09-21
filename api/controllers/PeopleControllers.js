const {PeopleServices} = require('../services')
const peopleServices = new PeopleServices('People')

class PeopleControllers {

  static async createData (req, res) {
    const shape = req.body
    try {
      const newData = await peopleServices.criar(shape)
      return res.status(201).json(newData) 
    }catch (err) {
      console.log(JSON.stringify(err))
    }
  }

  static async getAlldata (req, res) {
      try{
        const allPeople =  await peopleServices.pegarTodos()
        return res.status(200).json(allPeople)
      }catch (err) {
        console.log(err)
        return res.status(500).json(err)
      }
  }

  static async getOneData (req, res) {
    const {peopleId} = req.params
    try{
      const onePeople = await peopleServices.pegarUm(Number(peopleId))
      return res.status(200).json(onePeople)
    }catch (err) {
      console.log(err)
      return res.status(500).json(err)
    }
  }

  static async resetData ( req, res) {
    const  { peopleId } =  req.params
    const shape = req.body
    try {
      const updated=  await peopleServices.atualizarPeople(shape, Number(peopleId))
       return res.status(200).json(updated)
    }catch (err) {
      console.log(err)
      return res.status(500).json(err)
    }
  }

  static async remove(req, res ) {
     const {peopleId} = req.params
     try{
          await peopleServices.deletar(Number(peopleId))
          res.status(204).json({message: `O Cliente de id  ${peopleId}  foi deletado com sucesso`})
     }catch (err) {
       console.log(err) 
       return res.status(500).json(err)
     }
}

}

module.exports = PeopleControllers 