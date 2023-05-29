/* eslint-disable max-len */

import InventoryRepository from '../repositories/Inventory.mjs'
import RepositoryImpl from '../../../infra/repository/index.mjs'
import DeleteInventoryId from '../use_cases/DeleteInventory.mjs'
import { default as DeleteInventoryIdValidator } from './validators/DeleteInventory.mjs'

const Repository = new InventoryRepository(RepositoryImpl)

export async function remove(request, response, next) {
  try {
    const inventoryDto = request.query
    await DeleteInventoryIdValidator.validate(inventoryDto)

    const deleteInventoryIdUseCase = new DeleteInventoryId(Repository)
    const resultInventory = await deleteInventoryIdUseCase.execute(inventoryDto)
    return response.status(200).json(resultInventory)
  } catch (error) {
    return next(error)
  }
}








