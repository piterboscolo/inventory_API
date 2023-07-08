import * as SearchInventoryController from './controllers/SearchInventoryController.mjs'
import * as CreateInventoryController from './controllers/CreateInventoryController.mjs'
import * as DeleteInventoryController from './controllers/DeleteInventoryController.mjs'
import * as UpdateInventoryController from './controllers/UpdateInventoryController.mjs'
import { Router } from 'express'

const router = Router()

// inventory route
router.route('/v1/inventory/').post(CreateInventoryController.create)
router.route('/v1/inventory/assignEquipment').post(CreateInventoryController.store)

router.route('/v1/inventory/id').get(SearchInventoryController.search)
router.route('/v1/inventory/list').get(SearchInventoryController.searchList)
router.route('/v1/inventory/findEquipment').get(SearchInventoryController.findEquipment)

router.route('/v1/inventory/id').put(UpdateInventoryController.update)

router.route('/v1/inventory/id').delete(DeleteInventoryController.remove)

export default router
