import healthCheck from './paths/healthCheck.js'
import inventory from './paths/inventory.js'

let paths = Object.assign(
  healthCheck,
  inventory
)

export default paths
