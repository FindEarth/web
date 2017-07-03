import trae from '~plugins/trae'

const personService = {
  async all () {
    const response = await trae.get('/person')
    return response.data
  },

  async get (query = {}) {
    const response = await trae.get('/person', { params: query })
    return response.data
  },

  async getNear (coords, radius = 99999) {
    const response = await trae.get(`/person/near/${coords.lat}/${coords.lng}?radius=${radius}`)
    return response.data
  },

  async getById (id) {
    const response = await trae.get(`/person/${id}`)
    return response.data
  },

  async getBySlug (slug) {
    const response = await trae.get(`/person/${slug}`)
    return response.data
  }
}

export default personService
