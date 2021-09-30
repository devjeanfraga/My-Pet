const {PeopleServices} = require('../services')
const peopleServices = new PeopleServices('People')
const PeopleViews = require('../Views/PeopleViews')
const {PeopleValidation} = require('../validations/Validation')
const peopleValidation = new PeopleValidation()


class PeopleControllers {

  static async createPerson (req, res, next) {
    try {
      const personBody = req.body
      const person = new PeopleViews(personBody)
      await person.criationPerson()
      return res.status(201).json(peopleValidation.filter(person))
    }catch (err) {
      next(err)
    }
  }

  static async getAllPeople (req, res, next) {
      try{
        const allPeople= await peopleServices.pegarTodos()
        return res.status(200).json(peopleValidation.filter(allPeople) )
      }catch (err) {
        next(err)
      }
  }

  static async getPerson (req, res, next) {
    const {peopleId} = req.params
    try{
      const person = new PeopleViews({id: Number(peopleId)})
      await person.getPerson()
      //const onePeople = await peopleServices.pegarUm(Number(peopleId))
      console.log(person)
      return res.status(200).json(person)
      
    }catch (err) {
      next(err)
    }
  }

  static async resetPerson ( req, res, next) {
    const  { peopleId } =  req.params
    const infosBody = req.body
    const allData = Object.assign({ }, infosBody, {id:peopleId} )
    try {
      const updatedPerson = new PeopleViews(allData)
      await updatedPerson.updatePerson()
      return res.status(200).json(updatedPerson) 
    }catch (err) {
      next(err)
    }
  }

  static async removePerson(req, res, next ) {
     const {peopleId} = req.params
     try{
          const person = new PeopleViews({id: Number(peopleId)})
          await person.getPerson()
          await person.trash()
          //await peopleServices.deletar(peopleId)
          //console.log(person)
          res.status(204).json({message:"exluido com sucesso"})
     }catch (err) {
      next(err)
    }
}

}

module.exports = PeopleControllers 