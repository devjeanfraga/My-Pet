const database = require('../../models')

const images = {
    render (image) {
        return {
          id: image.database.Images.id,
          path: `http://http://192.168.0.104:3838/uploads/${image.database.Images.path}`
        }
    },

    renderMany (images = []) {
        return images.database.Images.map(image => {this.renderMany(image)})
    }
}