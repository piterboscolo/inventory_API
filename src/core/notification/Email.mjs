class Email {
  constructor(to, subject, message) {
    this._to = to
    this._subject = subject
    this._message = message
  }

  get to() {
    return this._to
  }

  get subject() {
    return this._subject
  }

  get message() {
    return this._message
  }
}

export default Email
