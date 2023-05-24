import InvalidParameterException from './exceptions/InvalidParameterException.mjs'
import UnauthorizedException from './exceptions/UnauthorizedException.mjs'
import jwk from './jwk.js'
import jwkToPem from 'jwk-to-pem'
import jwt from 'jsonwebtoken'

async function validateToken(request, response, next) {
  try {
    const token = request.headers?.authorization
    if (!token) {
      throw new InvalidParameterException(JSON.stringify({ error: 'Token não localizado.' }))
    }

    let pem = jwkToPem(jwk)
    jwt.verify(token, pem, { algorithms: ['RS256'] }, (err, decodedToken) => {
      if (err) {
        throw new UnauthorizedException(JSON.stringify(err.message))
      }
      request.identity = decodedToken.sub
    })

    return next()
  } catch (error) {
    return next(error)
  }
}

export default {
  validateToken
}
