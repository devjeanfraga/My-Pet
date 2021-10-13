
class Serial {
  objectFilter (data) {
    const newObject = {}
    
    this.publicField.forEach((field)=>{

      if(data.hasOwnProperty(field)) {
        newObject[field]= data[field]
      }
      
    })

    return newObject
  }

  filter(data){
    
    if(Array.isArray(data)){
      data= data.map((item)=>{
          return this.objectFilter(item)
      })
    }else {
      data= this.objectFilter(data)
    }

    return data
  }
}


class SerialClient extends Serial{
  constructor(extraFields) {
    super()
    this.publicField = ['id','name', 'phone', 'email'].concat(extraFields || [])
  }
}

class SerialPets extends Serial {
  constructor (extraFields) {
    super()
    this.publicField = ['id','name', 'age', 'breed', 'weight', 'gender', 'sexes', 'pet' ].concat(extraFields || [])
  }
}


module.exports = {
  Serial: Serial,
  SerialClient: SerialClient,
  SerialPets: SerialPets
}