/* eslint-disable max-len */
/* eslint-disable no-param-reassign */

import DataNotFoundException from '../../core/exceptions/DataNotFoundException.mjs'
import UUIDGenerator from '../../support/UUIDGenerator.mjs'

class UpdateUsers {
  constructor(repository) {
    this.repository = repository
  }

  async execute(userDto) {
    userDto._id = UUIDGenerator.from(userDto.id)
    delete userDto.id
    userDto.updated_at = new Date();
    const result = await this.repository.update(userDto);

    if (result.modifiedCount === 0) {
      throw new DataNotFoundException('User not found.')
    }

    return userDto;


  }
}

export default UpdateUsers
