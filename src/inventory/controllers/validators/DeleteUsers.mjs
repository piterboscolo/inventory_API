/* eslint-disable no-param-reassign */

import Ajv from 'ajv'
import InvalidParameterException from '../../../core/exceptions/InvalidParameterException.mjs'

let ajv = new Ajv({ allErrors: true, jsonPointers: true })

const schemaId = {
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
  const validateId = ajv.compile(schemaId)
  const result = validateId(data)

  if (result) {
    return result
  }

  throw new InvalidParameterException(JSON.stringify(validateId.errors))
}

export default {
  validate
}
