/* eslint-disable no-param-reassign */

import Ajv from 'ajv'
import InvalidParameterException from '../../../core/exceptions/InvalidParameterException.mjs'

let ajv = new Ajv({ allErrors: true, jsonPointers: true })

const schemaInventory = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
      format: 'uuid'
    },
    type: {
      type: 'string'
    },
    model: {
      type: 'string'
    },
    brand: {
      type: 'string'
    },
    patrimony: {
      type: 'string'
    },
    series: {
      type: 'string'
    }

  },
  required: [
    'id'
  ],
  additionalProperties: false
}

async function validate(data) {
  data.series = data.series.toString ()
  data.patrimony = data.patrimony.toString ()
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
