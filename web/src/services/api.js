const axios = require('axios')

const api = axios.create({
  baseURL: 'http://localhost:3838'
})

export default api;