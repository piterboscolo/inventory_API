/* eslint-disable max-len */

import { default as UsersIdPresenter } from '../presenters/CreateUsersById.mjs'
import UsersRepository from '../repositories/Users.mjs'
import RepositoryImpl from '../../../infra/repository/index.mjs'
import CreateUserId from '../use_cases/CreateUsers.mjs'
import { default as CreateUsersIdValidator } from './validators/CreateUsers.mjs'

const Repository = new UsersRepository(RepositoryImpl)

export async function create(request, response, next) {
  try {
    const userDto = request.body
    await CreateUsersIdValidator.validate(userDto)

    const createUsersIdUseCase = new CreateUserId(Repository)
    const resultUsers = await createUsersIdUseCase.execute(userDto)
    const presentUsers = await UsersIdPresenter.present(resultUsers)
    return response.status(200).json(presentUsers)
  } catch (error) {
    return next(error)
  }
}
