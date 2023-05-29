/* eslint-disable max-len */

import { default as UserIdPresenter } from '../presenters/UpdateUsersById.mjs';
import UsersRepository from '../repositories/Users.mjs';
import RepositoryImpl from '../../../infra/repository/index.mjs';
import UpdateUserById from '../use_cases/UpdateUsersById.mjs';
import { default as UpdateUsersIdValidator } from './validators/UpdateUsers.mjs';

const Repository = new UsersRepository(RepositoryImpl);

export async function update(request, response, next) {
  try {
    const userDto = request.query;
    await UpdateUsersIdValidator.validate(userDto);

    const updateUserByIdUseCase = new UpdateUserById(Repository);
    const resultUser = await updateUserByIdUseCase.execute(userDto);
    const presentUser = await UserIdPresenter.present(resultUser);
    return response.status(200).json(presentUser);
  } catch (error) {
    return next(error);
  }
}
