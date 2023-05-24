import express from 'express'

export default {
  boot: (app) => {
    app.enable('trust proxy')
    app.use(express.urlencoded({ limit: '20mb', extended: true, parameterLimit: 20000 }));
    app.use(express.json({ limit: '20mb' }));
  }
}
