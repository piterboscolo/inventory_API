/* eslint-disable no-param-reassign */

import Ajv from 'ajv'
import InvalidParameterException from '../../../core/exceptions/InvalidParameterException.mjs'

let ajv = new Ajv({ allErrors: true, jsonPointers: true })

const schemaInventory = {
  type: 'object',
  properties: {
    idUser: {
      type: 'string',
      format: 'uuid'
    },
    idInventory: {
      type: 'string',
      format: 'uuid'
    }
  },
  required: [
    'idInventory',
    'idUser'
    ],
  additionalProperties: false
}

async function validate(data) {
  const assignValidate = ajv.compile(schemaInventory)
  const result = assignValidate(data)

  if (result) {
    return result
  }

  throw new InvalidParameterException(JSON.stringify(assignValidate.errors))
}

export default {
  validate
}
