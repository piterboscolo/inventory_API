/* eslint-disable max-len */
/* eslint-disable no-param-reassign */

import DataNotFoundException from '../../core/exceptions/DataNotFoundException.mjs'
import UUIDGenerator from '../../support/UUIDGenerator.mjs'

class CreateUsers {
  constructor(repository) {
    this.repository = repository;
  }

  async execute(userDto) {
    const id = UUIDGenerator.generate()
    userDto._id = id
    userDto.created_at = new Date();
    const resultUser = await this.repository.save(userDto);
    if (!resultUser) {
      throw new DataNotFoundException('User not found.');
    }
    userDto._id = id
    return userDto;
  }
}

export default CreateUsers
