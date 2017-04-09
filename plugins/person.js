import trae from '~plugins/trae'

const personService = {
  async get (query = {}) {
    const response = await trae.get('/person', { params: query })
    return response.data
  },

  async getById (id) {
    const response = await trae.get(`/person/${id}`)
    return response.data
  }
}

export default personService