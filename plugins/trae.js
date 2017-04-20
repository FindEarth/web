import trae from 'trae'
import config from './config'

function errorMessage (err) {
  switch (err.status) {
    case 400:
      return err.message || 'Error 400: Bad Request'
    case 401:
      window.location.href = '/login'
      return err.message
    case 402:
      return 'Error 402: You must upgrade your account to do that'
    case 403:
      return 'Error 403: You are not authorized to access that'
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
  const msg = errorMessage(err)
  throw msg
}

function identity (res) {
  return res
}

// let options = {}

// The server-side needs a full url to works
// if (process.SERVER_BUILD) {
//   options.baseUrl = `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}`
// } else {
//   options.baseUrl = 'https://api.find.earth'
// }

const api = trae.create({
  baseUrl: config.api.baseUrl
})

api.after(identity, throwError)

export default api
