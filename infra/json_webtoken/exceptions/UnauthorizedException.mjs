import BaseException from './BaseException.mjs'

class DataNotFoundException extends BaseException {
  constructor(message = 'Unauthorized') {
    super(401, message, true)
  }
}

export default DataNotFoundException
