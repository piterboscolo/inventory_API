import healthCheck from '../../src/maintenance/healthcheck.mjs'
import inventory from '../../src/inventory/routes.mjs'
import wrongWay from '../../src/maintenance/wrongWay.mjs'

function registerRoutes(app) {
  app.use(healthCheck)
  app.use(inventory)
  app.use(wrongWay)
}

export default {
  boot: (app) => {
    registerRoutes(app)
  }
}
