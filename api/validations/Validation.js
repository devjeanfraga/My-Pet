class Validation {

  filter_Public_Fields (data) {
    const newObject = {}

    this.publicFields.forEach( (field) => {
      if (data.hasOwnProperty(field)) { //hasOwnProperty
        newObject[field] = data[field] 
      }
    })
    return newObject
  }

  filter (data) {
    if ( Array.isArray(data) ) {

      data = data.map( (item) => {
        return this.filter_Public_Fields(item)
      })

    } else {
      data = this.filter_Public_Fields(data)
      
    }
    return data
  }

}

class PeopleValidation extends Validation {
  constructor (extraFields) {
    super()
    this.publicFields = ['id', 'name', 'active', 'appointment'].concat(extraFields || [])
  }
 
}

module.exports = {
  Validation: Validation,
  PeopleValidation: PeopleValidation
}