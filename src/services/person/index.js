import api from 'services/api';

const personService = {};

personService.get = (query = {}) => api
  .get('/person', { params: query })
  .then(response => response.data);

personService.getById = id => api
  .get(`/person/${id}`)
  .then(response => response.data);

export default personService;
