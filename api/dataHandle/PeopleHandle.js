const {PeopleServices} = require('../services/')
const peopleServices = new PeopleServices ('People')

class PeopleHandle  {
  constructor ({id, name, phone, email, active = true , appointment = true, createdAt, updatedAt}) {
    
    this.id = id
    this.name = name
    this.phone = phone
    this.email = email
    this.active = active
    this.appointment = appointment
    this.createdAt = createdAt
    this.updated = updatedAt
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
     
    // return repository
  }
}

module.exports = PeopleHandle