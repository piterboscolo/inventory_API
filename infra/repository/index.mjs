import * as queries from './Mongo/queries/index.mjs'

import { default as MongoImpl } from './Mongo/index.mjs'

class RepositoryWrapper {
  constructor(impl, queryString) {
    this.queries = queryString
    this.impl = impl
  }

  save(collection, data) {
    return this.impl.save(collection, data)
  }

  update(collection, data) {
    return this.impl.update(collection, data)
  }

  get(collection, id) {
    return this.impl.get(collection, id)
  }

  remove(collection, id) {
    return this.impl.remove(collection, id)
  }

  searchByIdentity(collection, params) {
    const statement = this.queries.searchByIdentity
    return this.impl.find(
      collection,
      statement.query(params)
    )
  }

  async searchInventoryByCode(id, code) {
    const statement = this.queries.searchInventoryByCode
    return this.impl.find(
      statement.collection,
      statement.query(id, code)
    )
  }

  async searchInventoryList(params, pagination) {
    const statement = this.queries.searchInventoryList
    return this.impl.find(
      statement.collection,
      statement.query(params),
      pagination
    )
  }

  searchInventoryUsers(collection, inventory, pagination) {
    const statement = this.queries.searchInventoryUsers
    return this.impl.aggregate(
      collection,
      statement.query(inventory, pagination)
    )
  }

  searchInventoryUsersCount(collection, inventory) {
    const statement = this.queries.searchInventoryUsers
    return this.impl.aggregateCount(
      collection,
      statement.query(inventory)
    )
  }

  searchInventoryCodCenter(collection, inventory, pagination) {
    const statement = this.queries.searchInventoryCodCenter
    return this.impl.aggregate(
      collection,
      statement.query(inventory, pagination)
    )
  }

  searchInventoryCodCenterCount(collection, inventory) {
    const statement = this.queries.searchInventoryCodCenter
    return this.impl.aggregateCount(
      collection,
      statement.query(inventory)
    )
  }

  searchInventoryReadByUser(collection, params) {
    const statement = this.queries.searchInventoryReadByUser
    return this.impl.find(
      collection,
      statement.query(params)
    )
  }

  searchUserInventory(collection, params, pagination) {
    const statement = this.queries.searchListUserByInventory
    return this.impl.aggregate(
      collection,
      statement.query(params, pagination)

    )
  }

  searchUserInventoryCount(collection, params) {
    const statement = this.queries.searchListUserByInventory
    return this.impl.aggregateCount(
      collection,
      statement.query(params)
    )
  }

  searchUserInventoryCodCenter(collection, params, pagination) {
    const statement = this.queries.searchListUserByInventoryByCodCenter
    return this.impl.aggregate(
      collection,
      statement.query(params, pagination)
    )
  }

  searchUserInventoryCodCenterCount(collection, params) {
    const statement = this.queries.searchListUserByInventoryByCodCenter
    return this.impl.aggregateCount(
      collection,
      statement.query(params)
    )
  }

  searchInventoryByUser(collection, params, pagination) {
    const statement = this.queries.searchInventoryByUser
    return this.impl.aggregate(
      collection,
      statement.query(params, pagination)

    )
  }

  // searchInventoryByUserCount(collection, params) {
  //   const statement = this.queries.searchInventoryByUser
  //   return this.impl.aggregateCount(
  //     collection,
  //     statement.query(params)
  //   )
  // }

  searchUserById(params) {
    const statement = this.queries.searchUserById
    return this.impl.aggregate(
      statement.collection,
      statement.query(params)
    )
  }

  // searchUserByCodCenterTypeUser(params) {
  //   const statement = this.queries.searchUserByCodCenterTypeUser
  //   return this.impl.aggregate(
  //     statement.collection,
  //     statement.query(params)
  //   )
  // }
}

export { Implementation } from './Mongo/index.mjs'
export default new RepositoryWrapper(MongoImpl, queries)
