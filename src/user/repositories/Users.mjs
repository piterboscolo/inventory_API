class Users {
  constructor(repositoryImpl) {
    this.collection = 'user'
    this.repository = repositoryImpl
  }

  async save(inventory) {
    return this
      .repository
      .save(this.collection, inventory)
  }

  async update(user) {
    return this
      .repository
      .update(this.collection, user)
  }

  async getByStatus(inventory, pagination) {
    const data = await this
      .repository
      .searchInventoryByStatus(inventory, pagination)

    if (data?.length === 0) {
      return null
    }

    return data
  }

  async getByCode(id, code) {
    const data = await this
      .repository
      .searchInventoryByCode(id, code)

    if (data?.length === 0) {
      return null
    }

    return data
  }

  async getById(id) {
    const data = await this.repository.get(this.collection, id)
    if (data?.length === 0) {
      return null
    }

    return data
  }

  async getByIdentity(params) {
    const data = await this
      .repository
      .searchByIdentity(this.collection, params)

    if (data?.length === 0) {
      return null
    }

    return data
  }

  async getInventoryUsers(inventory, pagination) {
    const data = await this
      .repository
      .searchInventoryUsers(this.collection, inventory, pagination)

    if (!data) {
      return null
    }
    return data
  }

  async getInventoryUsersCount(inventory) {
    const data = await this
      .repository
      .searchInventoryUsersCount(this.collection, inventory)

    if (!data) {
      return null
    }
    return data
  }

  async getInventoryCodCenter(inventory, pagination) {
    const data = await this
      .repository
      .searchInventoryCodCenter(this.collection, inventory, pagination)

    if (!data) {
      return null
    }
    return data
  }

  async getInventoryCodCenterCount(inventory) {
    const data = await this
      .repository
      .searchInventoryCodCenterCount(this.collection, inventory)

    if (!data) {
      return null
    }
    return data
  }

  async remove(id) {
    const data = await this
      .repository
      .remove(this.collection, id)

    if (!data) {
      return null
    }

    return data
  }

  async getUserInventory(params, pagination) {
    const data = await this
      .repository
      .searchUserInventory(this.collection, params, pagination)

    if (!data) {
      return null
    }

    return data
  }

  async getUserInventoryCount(params) {
    const data = await this
      .repository
      .searchUserInventoryCount(this.collection, params)

    if (!data) {
      return null
    }
    return data
  }

  async getUserInventoryCodCenter(id, pagination) {
    const data = await this
      .repository
      .searchUserInventoryCodCenter(this.collection, id, pagination)

    if (!data) {
      return null
    }

    return data
  }

  async getUserInventoryCodCenterCount(id) {
    const data = await this
      .repository
      .searchUserInventoryCodCenterCount(this.collection, id)

    if (!data) {
      return null
    }
    return data
  }

  async getInventoryByUser(params, pagination) {
    const data = await this
      .repository
      .searchInventoryByUser(this.collection, params, pagination)

    if (!data) {
      return null
    }

    return data
  }

  async getInventoryByUserCount(params) {
    const data = await this
      .repository
      .searchInventoryByUserCount(this.collection, params)

    if (!data) {
      return null
    }
    return data
  }

  async getUserById(params) {
    const data = await this
      .repository
      .searchUserById(params)

    if (!data) {
      return null
    }
    return data
  }

  async getUserByCodCenterTypeUser(params) {
    const data = await this
      .repository
      .searchUserByCodCenterTypeUser(params)

    if (!data) {
      return null
    }
    return data
  }
}

export default Users
