class ImagesDto {
  constructor (id, path, pet_id, createdAt, updatedAt) {
    this.id = id
    this.path = path
    this.pet_id = pet_id 
    this.createdAt = createdAt
    this.updatedAt = updatedAt
  }
}

module.exports = ImagesDto