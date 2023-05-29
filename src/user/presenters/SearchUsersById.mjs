import UUIDGenerator from '../../support/UUIDGenerator.mjs'

const presenterMap = (data) => {
  const resultUsersSpecifications = data.map((Temp) => {
    let id = UUIDGenerator.from(Temp._id)

    let result = {
      id: id.toString(),
      language: Temp.language,
      type: Temp.type,
      idType: Temp.idType,
      yearsUsefulLife: Temp.yearsUsefulLife
    }

    return result
  })

  return resultUsersSpecifications
}

const presenter = async (data) => {
  let result = {
    id: UUIDGenerator.from(data._id).toString(),
    value: data.value,
    created_at: data.created_at

  }

  return result
}

export default {
  present: presenter,
  presentMap: presenterMap
}
