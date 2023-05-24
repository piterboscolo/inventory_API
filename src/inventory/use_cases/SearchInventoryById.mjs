/* eslint-disable max-len */
/* eslint-disable no-param-reassign */

// import InternalServerErrorException from '../../core/exceptions/InternalServerErrorException.mjs'

import DataNotFoundException from '../../core/exceptions/DataNotFoundException.mjs'
import UUIDGenerator from '../../support/UUIDGenerator.mjs'

class SearchInventory {
  constructor(repository) {
    this.repository = repository
  }

  async execute(inventoryId) {
    const id = UUIDGenerator.from(inventoryId.id)
    const resultInventory = await this.repository.getById(id)
    if (!resultInventory) {
      throw new DataNotFoundException('Inventory not found.')
    }
    return resultInventory
  }
}

export default SearchInventory
