/* eslint-disable max-len */
/* eslint-disable no-param-reassign */

import DataNotFoundException from '../../core/exceptions/DataNotFoundException.mjs'
import UUIDGenerator from '../../support/UUIDGenerator.mjs'

class DeleteUser {
  constructor(repository) {
    this.repository = repository;
  }

    async execute(userId) {
    const id = UUIDGenerator.from(userId.id)

    const resultId = await this.repository.remove(id);
    if (resultId.deletedCount === 1) {
      return { message: 'Removed Success' }

    }
    throw new DataNotFoundException('Id not found.');
  }
}

export default DeleteUser
