import trae from 'trae'
import config from './config'

function errorMessage (err) {
  switch (err.status) {
    case 400:
      return err.message || 'Bad Request'
    case 402:
      return 'You must upgrade your account to do that'
    case 403:
      return 'You are not authorized to access that'
    case 404:
      return 'Requested Resource Not Found'
    case 429:
      return 'Rate Limited'
    case 500: break
    case 502: break
    case 503:
      return `API Server Error ${err.status}`
    default:
      return `API Request Error ${err.status}`
  }
  return 'Unknown Error'
}

function throwError (err) {
  const error = { message: errorMessage(err), statusCode: err.status }
  throw error
}

function identity (res) {
  return res
}

const api = trae.create({
  baseUrl: config.api.baseUrl
})

api.after(identity, throwError)

export default api
