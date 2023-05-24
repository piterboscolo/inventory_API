import Email from '../../core/inventory/Email.mjs'

class SendEmail {
  constructor(notifier) {
    this.notifier = notifier
  }

  async send(params) {
    try {
      await this.notifier.email(
        new Email(params.email, params.subject, params.message)
      )
    } catch (error) {
      console.error(`Error trying to send welcome message: ${error.message}`)
    }
    return { message: 'Email enviado com sucesso' }
  }
}

export default SendEmail
