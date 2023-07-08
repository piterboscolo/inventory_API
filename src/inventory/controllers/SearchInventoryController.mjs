/* eslint-disable max-len */

import { default as InventoryIdPresenter } from '../presenters/SearchInventoryById.mjs'
import { default as InventoryListPresenter } from '../presenters/SearchInventoryByList.mjs'
import InventoryRepository from '../repositories/Inventory.mjs'
import RepositoryImpl from '../../../infra/repository/index.mjs'
import SearchInventoryId from '../use_cases/SearchInventoryById.mjs'
import FindInventory from '../use_cases/FindInventory.mjs'
import { default as SearchInventoryIdValidator } from './validators/SearchInventoryById.mjs'
import { default as SearchInventoryListValidator } from './validators/SearchInventoryByList.mjs'
import { default as FindEquipmentValidator } from './validators/FindEquipmentValidator.mjs'

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

export async function searchList(request, response, next) {
  try {
    const inventoryList = request.query
    await SearchInventoryListValidator.validate(inventoryList)

    const searchInventoryListUseCase = new SearchInventoryList(Repository)
    const resultInventoryList = await searchInventoryListUseCase.execute(inventoryList)
    const presentInventoryList = await InventoryListPresenter.presentMap(resultInventoryList)
    return response.status(200).json(presentInventoryList)
  } catch (error) {
    return next(error)
  }
}

export async function findEquipment(request, response, next) {
  try {
    const inventoryFind = request.query
    await FindEquipmentValidator.validate(inventoryFind)

  const findInventoryUseCase = new FindInventory(Repository)
  const resultInventoryFind = await findInventoryUseCase.execute(inventoryFind)
  const presentInventoryFind= await InventoryListPresenter.presentMap(resultInventoryFind)
    return response.status(200).json(presentInventoryFind)
  } catch (error) {
    return next(error)
  }
}






