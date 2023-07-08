/* eslint-disable max-len */
/* eslint-disable no-param-reassign */

import DataNotFoundException from '../../core/exceptions/DataNotFoundException.mjs'
import UUIDGenerator from '../../support/UUIDGenerator.mjs'


class FindInventory {
  constructor(repository) {
    this.repository = repository
  }
  
  async execute(inventoryFind) {
    if (inventoryFind.id) {
      inventoryFind.id = UUIDGenerator.from(inventoryFind.id)
    }
    
    const resultInventoryFind = await this.repository.getSearchList(inventoryFind)
    if (!resultInventoryFind) {
      throw new DataNotFoundException('Inventory not found.')
    }
      return resultInventoryFind
  }
}

export default FindInventory
