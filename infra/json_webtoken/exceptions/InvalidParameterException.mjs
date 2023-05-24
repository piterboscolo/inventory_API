import BaseException from './BaseException.mjs'

class DataNotFoundException extends BaseException {
  constructor(message = 'invalid parameters') {
    super(400, message, true)
  }
}

export default DataNotFoundException
