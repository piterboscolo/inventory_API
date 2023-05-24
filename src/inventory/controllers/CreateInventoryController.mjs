/* eslint-disable max-len */

import { default as InventoryIdPresenter } from '../presenters/CreateInventoryById.mjs'
import InventoryRepository from '../repositories/Inventory.mjs'
import RepositoryImpl from '../../../infra/repository/index.mjs'
import CreateInventoryId from '../use_cases/CreateInventory.mjs'
import { default as CreateInventoryIdValidator } from './validators/CreateInventory.mjs'

const Repository = new InventoryRepository(RepositoryImpl)

export async function create(request, response, next) {
  try {
    const inventoryDto = request.body
    await CreateInventoryIdValidator.validate(inventoryDto)

    const createInventoryIdUseCase = new CreateInventoryId(Repository)
    const resultInventory = await createInventoryIdUseCase.execute(inventoryDto)
    const presentInventory = await InventoryIdPresenter.present(resultInventory)
    return response.status(200).json(presentInventory)
  } catch (error) {
    return next(error)
  }
}
