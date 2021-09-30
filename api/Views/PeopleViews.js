const {PeopleServices} = require('../services')
const peopleServices = new PeopleServices ('People')
const { DataNotProvided, InvalidFields, NotFound} = require('../errors')

class PeopleViews  {
  constructor ({id, name, phone, email, active = true , appointment = true, createdAt, updatedAt}) {
    
    this.id = id
    this.name = name
    this.phone = phone
    this.email = email
    this.active = active
    this.appointment = appointment
    this.createdAt = createdAt
    this.updatedAt = updatedAt
  }

  intputsValidation () {
    const fields = ['name', 'phone', 'email'] 

    fields.forEach(field => {

      const valor = this[field] //this.name, this.phone, this.email

      if (typeof valor !== 'string' || typeof valor.length === 0) {
        throw new InvalidFields(field)
      }
    })
  }

  async criationPerson () {

    this.intputsValidation
    const repository = await peopleServices.criar({ 
      name: this.name,
      phone: this.phone,
      email: this.email,
      active: this.active,
      appointment: this.appointment
     })

     this.id = repository.id
     this.createdAt = repository.createdAt
     this.updatedAt = repository.updatedAt   
     
    
  }

  async getPerson () {
    
    const getOnePerson = await peopleServices.pegarUm(this.id) 

    this.name = getOnePerson.name
    this.phone = getOnePerson.phone
    this.email = getOnePerson.email
    this.active = getOnePerson.active
    this.appointment = getOnePerson.appointment
    this.createdAt = getOnePerson.createdAt
    this.updatedAt = getOnePerson.updatedAt
  } 
  
  async updatePerson () {
   await peopleServices.pegarUm(this.id)

   const campos = ['name', 'phone', 'email', 'active', 'appointment']
   const camposAtualizados = {}

   campos.forEach(campo => {
     const valorDoCampo = this[campo]

    if (typeof valorDoCampo === 'string' && valorDoCampo.length > 0) {
          camposAtualizados[campo] = valorDoCampo
    } 
   })

   if(Object.keys(camposAtualizados).length === 0) {
    throw new DataNotProvided()
 }
    await peopleServices.atualizarRegistro(camposAtualizados, this.id)
  }

  async trash () {
    return peopleServices.deletar(this.id)
  }

}

module.exports = PeopleViews