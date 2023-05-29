/* eslint-disable max-len */
/* eslint-disable no-param-reassign */

import DataNotFoundException from '../../core/exceptions/DataNotFoundException.mjs'
import UUIDGenerator from '../../support/UUIDGenerator.mjs'

class UpdateInventory {
  constructor(repository) {
    this.repository = repository
  }

  async execute(inventoryDto) {
    inventoryDto._id = UUIDGenerator.from(inventoryDto.id)
    delete inventoryDto.id
    inventoryDto.updated_at = new Date();
    const result = await this.repository.update(inventoryDto);

    if (result.modifiedCount === 0) {
      throw new DataNotFoundException('Inventory not found.')
    }

    return inventoryDto;


  }
}

export default UpdateInventory
