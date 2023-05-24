/* eslint-disable max-len */
/* eslint-disable no-param-reassign */

//import InternalServerErrorException from '../../core/exceptions/InternalServerErrorException.mjs'

import DataNotFoundException from '../../core/exceptions/DataNotFoundException.mjs'
import UUIDGenerator from '../../support/UUIDGenerator.mjs'

class DeleteInventory {
  constructor(repository) {
    this.repository = repository;
  }

    async execute(inventoryId) {
    const id = UUIDGenerator.from(inventoryId.id)

    const resultInventory = await this.repository.remove(id);
    if (resultInventory.deletedCount === 1) {
      return { message: 'Removed Success' }

    }
    throw new DataNotFoundException('Inventory not found.');
  }
}

export default DeleteInventory
