/* eslint-disable no-param-reassign */

import Ajv from 'ajv'
import InvalidParameterException from '../../../core/exceptions/InvalidParameterException.mjs'

let ajv = new Ajv({ allErrors: true, jsonPointers: true })

const schemaInventory = {
  type: 'object',
  properties: {
    id: {
      type: 'string'
    }

  },
  required: [
    'id'
  ],
  additionalProperties: false
}

async function validate(data) {
  const validateInventory = ajv.compile(schemaInventory)
  const result = validateInventory(data)

  if (result) {
    return result
  }

  throw new InvalidParameterException(JSON.stringify(validateInventory.errors))
}

export default {
  validate
}
