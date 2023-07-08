/* eslint-disable max-len */
/* eslint-disable no-param-reassign */


import UUIDGenerator from '../../support/UUIDGenerator.mjs'

class AssignInventory {
  constructor(repository) {
    this.repository = repository;
  }

  async execute(assignDto) {
    const id = UUIDGenerator.generate()
    assignDto.idUser = UUIDGenerator.from (assignDto.idUser)
    assignDto.idInventory = UUIDGenerator.from (assignDto.idInventory)
    assignDto._id = id
    assignDto.isActive = true
    assignDto.created_at = new Date();
    await this.repository.save(assignDto);
    assignDto._id = id
    return assignDto;
  }
}

export default AssignInventory


