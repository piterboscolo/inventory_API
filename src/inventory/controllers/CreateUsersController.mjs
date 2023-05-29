/* eslint-disable max-len */

import { default as InventoryIdPresenter } from '../presenters/CreateInventoryById.mjs'
import InventoryRepository from '../repositories/Inventory.mjs'
import RepositoryImpl from '../../../infra/repository/index.mjs'
import CreateUserId from '../use_cases/CreateUsers.mjs'
import { default as CreateUsersIdValidator } from './validators/CreateUsers.mjs'

const Repository = new InventoryRepository(RepositoryImpl)

export async function create(request, response, next) {
  try {
    const inventoryDto = request.body
    await CreateUsersIdValidator.validate(inventoryDto)

    const createUsersIdUseCase = new CreateUserId(Repository)
    const resultInventory = await createUsersIdUseCase.execute(inventoryDto)
    const presentInventory = await InventoryIdPresenter.present(resultInventory)
    return response.status(200).json(presentInventory)
  } catch (error) {
    return next(error)
  }
}
