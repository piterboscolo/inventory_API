import { Notifier } from '../../core/inventory/index.mjs'
import SendEmail from './email.mjs'
import message from '../views/email_message.js'

async function sendMessage(params) {
  const envelope = {
    subject: 'Welcome to DP Inventory',
    message: message(params.name),
    email: params.email
  }

  const sendWelcome = new SendEmail(Notifier)
  await sendWelcome.send(envelope)
}

const sendEmail = async (params) => {
  await sendMessage(params)
}

export { sendEmail }
