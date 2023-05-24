/* eslint-disable max-len */

import { default as InventoryIdPresenter } from '../presenters/SearchInventoryById.mjs'
import InventoryRepository from '../repositories/Inventory.mjs'
import RepositoryImpl from '../../../infra/repository/index.mjs'
import SearchInventoryId from '../use_cases/SearchInventoryById.mjs'
import { default as SearchInventoryIdValidator } from './validators/SearchInventoryById.mjs'

const Repository = new InventoryRepository(RepositoryImpl)

export async function search(request, response, next) {
  try {
    const inventoryId = request.query
    await SearchInventoryIdValidator.validate(inventoryId)

    const searchInventoryIdUseCase = new SearchInventoryId(Repository)
    const resultInventory = await searchInventoryIdUseCase.execute(inventoryId)
    const presentInventory = await InventoryIdPresenter.present(resultInventory)
    return response.status(200).json(presentInventory)
  } catch (error) {
    return next(error)
  }
}
