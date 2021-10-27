
class Serial {
  json (data) {
    return JSON.stringify(data)
  }

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
    this.publicField = ['id','name'].concat(extraFields || [])
  }
}

class SerialPets extends Serial {
  constructor (extraFields) {
    super()
    this.publicField = ['name', 'breed' ].concat(extraFields || [])
  }
}


module.exports = {
  Serial: Serial,
  SerialClient: SerialClient,
  SerialPets: SerialPets
}