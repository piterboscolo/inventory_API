class Users {
  constructor(repositoryImpl) {
    this.collection = 'users'
    this.repository = repositoryImpl
  }

  async save(user) {
    return this
      .repository
      .save(this.collection, user)
  }

  async getById(id) {
    const data = await this.repository.get(this.collection, id)
    if (data?.length === 0) {
      return null
    }

    return data
  }

  async removeInventory(id) {
    const data = await this
      .repository
      .remove(this.collection, id)

    if (!data) {
      return null
    }

    return data
  }

  // modelo para paginação
  async getInventoryByUser(params, pagination) {
    const data = await this
      .repository
      .searchInventoryByUser(this.collection, params, pagination)

    if (!data) {
      return null
    }

    return data
  }

  // modelo para paginação
  async getInventoryByUserCount(params) {
    const data = await this
      .repository
      .searchInventoryByUserCount(this.collection, params)

    if (!data) {
      return null
    }
    return data
  }
}

export default Users
