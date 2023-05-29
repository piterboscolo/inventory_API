/* eslint-disable max-len */

import { default as UserIdPresenter } from '../presenters/SearchUsersById.mjs'
import UserRepository from '../repositories/Inventory.mjs'
import RepositoryImpl from '../../../infra/repository/index.mjs'
import SearchUsersId from '../use_cases/SearchUsersById.mjs'
import { default as SearchUsersIdValidator } from './validators/SearchUsersById.mjs'

const Repository = new UserRepository(RepositoryImpl)

export async function search(request, response, next) {
  try {
    const userId = request.query
    await SearchUsersIdValidator.validate(userId)

    const searchUsersIdUseCase = new SearchUsersId(Repository)
    const resultUsers = await searchUsersIdUseCase.execute(userId)
    const presentUser = await UserIdPresenter.present(resultUsers)
    return response.status(200).json(presentUser)
  } catch (error) {
    return next(error)
  }
}
