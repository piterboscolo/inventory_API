import { boot as EventBoot } from '../event/index.mjs'
import EventManager from '../event/EventManager.js'
import { boot as NotifierBoot } from '../notification/index.mjs'
import { default as NotifierImpl } from '../../../infra/notification/Notifier.mjs'

export default {
  boot: (app) => {
    // eslint-disable-next-line no-param-reassign
    app.locals.event = new EventManager()
    EventBoot(app.locals.event)
    NotifierBoot(NotifierImpl)
  }
}
