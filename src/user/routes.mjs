import * as SearchUsersController from './controllers/SearchUsersController.mjs'
import * as CreateUsersController from './controllers/CreateUsersController.mjs'
import * as DeleteUsersController from './controllers/DeleteUsersController.mjs'
import * as UpdateUsersController from './controllers/UpdateUsersController.mjs'
import { Router } from 'express'

const router = Router()


// user route

router.route('/v1/user/id').get(SearchUsersController.search)
router.route('/v1/user/').post(CreateUsersController.create)
router.route('/v1/user/id').delete(DeleteUsersController.remove)
router.route('/v1/user/id').put(UpdateUsersController.update)

export default router
