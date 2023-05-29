/* eslint-disable max-len */
/* eslint-disable no-param-reassign */

// import InternalServerErrorException from '../../core/exceptions/InternalServerErrorException.mjs'

import DataNotFoundException from '../../core/exceptions/DataNotFoundException.mjs'
import UUIDGenerator from '../../support/UUIDGenerator.mjs'

class CreateInventory {
  constructor(repository) {
    this.repository = repository;
  }

  async execute(inventoryDto) {
    const id = UUIDGenerator.generate()
    inventoryDto._id = id
    inventoryDto.created_at = new Date();
    const resultInventory = await this.repository.save(inventoryDto);
    if (!resultInventory) {
      throw new DataNotFoundException('Inventory not found.');
    }
    inventoryDto._id = id
    return inventoryDto;
  }
}

export default CreateInventory
