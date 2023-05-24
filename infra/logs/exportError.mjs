/* eslint-disable consistent-return */

import logger from './logger.mjs'
import { v4 as uuidv4 } from 'uuid'

function objectLogError(req, err, code) {
  const error = `Code: ${code} || Path: ${req.route !== undefined ? req.route.path : 'Invalid Route'}
  || Method: ${req.method}
  || User Name: ${req.user !== undefined ? req.user.user.name : 'Unknown user'}
  || User Id: ${req.user !== undefined ? req.user.user._id : 'Unknown user'}
  || Info App: ${req.user !== undefined ? JSON.stringify(req.user.user.version) : 'Unknown user'}
  || Body: ${req.body !== undefined ? JSON.stringify(req.body) : 'Not Body'}
  || Host: ${req.headers !== undefined ? req.headers.host : 'Not headers'}
  || Params: ${req.params !== undefined ? JSON.stringify(req.params) : 'Not Params'}
  || Original URL: ${req.originalUrl !== undefined ? req.originalUrl : 'Not Original Url'}
  || Ip: ${req.headers['x-forwarded-for'] || req.socket.remoteAddress}
  || Stack: ${err.stack !== undefined ? err.stack : 'Not stack'}
  || Error: ${err}}`
  return error
}

function exportError(err, req) {
  const code = uuidv4()
  const logError = objectLogError(req, err, code)
  logger.error(`Error ${logError}`)
}

export default exportError
