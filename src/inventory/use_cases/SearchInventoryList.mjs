/* eslint-disable max-len */
/* eslint-disable no-param-reassign */

import DataNotFoundException from '../../core/exceptions/DataNotFoundException.mjs'
import UUIDGenerator from '../../support/UUIDGenerator.mjs'


class SearchInventoryList {
  constructor(repository) {
    this.repository = repository
  }
  
  async execute(inventoryList) {
    if (inventoryList.id) {
      inventoryList.id = UUIDGenerator.from(inventoryList.id)
    }
    
    const resultInventoryList = await this.repository.getSearchList(inventoryList)
    if (!resultInventoryList) {
      throw new DataNotFoundException('Inventory not found.')
    }
      return resultInventoryList
  }
}

export default SearchInventoryList
