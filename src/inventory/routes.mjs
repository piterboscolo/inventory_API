import * as SearchInventoryController from './controllers/SearchInventoryController.mjs'
import * as CreateInventoryController from './controllers/CreateInventoryController.mjs'
import * as DeleteInventoryController from './controllers/DeleteInventoryController.mjs'
import * as SearchUsersController from './controllers/SearchUsersController.mjs'
import * as CreateUsersController from './controllers/CreateUsersController.mjs'
import * as UpdateInventoryController from './controllers/UpdateInventoryController.mjs'
import * as DeleteUsersController from './controllers/DeleteUsersController.mjs'
import { Router } from 'express'

const router = Router()

// inventory route

router.route('/v1/inventory/id').get(SearchInventoryController.search)
router.route('/v1/inventory/id').put(UpdateInventoryController.update)
router.route('/v1/inventory/').post(CreateInventoryController.create)
router.route('/v1/inventory/id').delete(DeleteInventoryController.remove)

// user route

router.route('/v1/user/id').get(SearchUsersController.search)
router.route('/v1/user/').post(CreateUsersController.create)
router.route('/v1/user/id').delete(DeleteUsersController.remove)

export default router
