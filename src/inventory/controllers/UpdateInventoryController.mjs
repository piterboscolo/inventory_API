/* eslint-disable max-len */

import { default as InventoryIdPresenter } from '../presenters/UpdateInventoryById.mjs';
import InventoryRepository from '../repositories/Inventory.mjs';
import RepositoryImpl from '../../../infra/repository/index.mjs';
import UpdateInventoryById from '../use_cases/UpdateInventoryById.mjs';
import { default as UpdateInventoryIdValidator } from './validators/UpdateInventory.mjs';

const Repository = new InventoryRepository(RepositoryImpl);

export async function update(request, response, next) {
  try {
    const inventoryDto = request.query;
    await UpdateInventoryIdValidator.validate(inventoryDto);

    const updateInventoryByIdUseCase = new UpdateInventoryById(Repository);
    const resultInventory = await updateInventoryByIdUseCase.execute(inventoryDto);
    const presentInventory = await InventoryIdPresenter.present(resultInventory);
    return response.status(200).json(presentInventory);
  } catch (error) {
    return next(error);
  }
}
