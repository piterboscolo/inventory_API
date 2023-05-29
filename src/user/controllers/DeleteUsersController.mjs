/* eslint-disable max-len */

import UserRepository from '../repositories/Users.mjs'
import RepositoryImpl from '../../../infra/repository/index.mjs'
import DeleteUserId from '../use_cases/DeleteUsers.mjs'
import { default as DeleteUsersIdValidator } from './validators/DeleteUsers.mjs'

const Repository = new UserRepository(RepositoryImpl)

export async function remove(request, response, next) {
  try {
    const userId = request.query
    await DeleteUsersIdValidator.validate(userId)

    const deleteUserIdUseCase = new DeleteUserId(Repository)
    const resultIUsers = await deleteUserIdUseCase.execute(userId)
    return response.status(200).json(resultIUsers)
  } catch (error) {
    return next(error)
  }
}








