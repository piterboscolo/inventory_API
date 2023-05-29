/* eslint-disable max-len */
/* eslint-disable no-param-reassign */

import DataNotFoundException from '../../core/exceptions/DataNotFoundException.mjs'
import UUIDGenerator from '../../support/UUIDGenerator.mjs'

class SearchUsers {
  constructor(repository) {
    this.repository = repository
  }

  async execute(userId) {
    const id = UUIDGenerator.from(userId.id)
    const resultUser = await this.repository.getById(id)
    if (!resultUser) {
      throw new DataNotFoundException('User not found.')
    }
    return resultUser
  }
}

export default SearchUsers
