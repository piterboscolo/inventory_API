import BaseException from './BaseException.mjs'
import StatusCode from '../http/StatusCode.mjs'

class InvalidOperationException extends BaseException {
  constructor(message = 'Internal Server Error Exception') {
    super(StatusCode.INTERNAL_SERVER_ERROR, message, true)
  }
}

export default InvalidOperationException
