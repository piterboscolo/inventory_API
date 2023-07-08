/* eslint-disable max-len */

import { default as InventoryAssignPresenter } from '../presenters/AssignInventory.mjs'
import InventoryRepository from '../repositories/Assign.mjs'
import RepositoryImpl from '../../../infra/repository/index.mjs'
import AssignInventory from '../use_cases/AssignInventory.mjs'
import { default as AssignValidator } from './validators/AssignValidator.mjs'

const Repository = new InventoryRepository(RepositoryImpl)

//export from collection inventory
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

//export from collection assign
export async function store(request, response, next) {
  try {
    const assignDto = request.body;
    await AssignValidator.validate(assignDto)

    const assignUseCaseInventory = new AssignInventory(Repository)
    const resultInventory = await assignUseCaseInventory.execute(assignDto)
    const presentInventory = await InventoryAssignPresenter.present(resultInventory)
    return response.status(200).json(presentInventory)
  } catch (error) {
    return next(error)
  }
}
