import UUIDGenerator from '../../support/UUIDGenerator.mjs'


const presenterMap = (data) => {
  const resultInventorySpecifications = data.map((Temp) => {
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

  return resultInventorySpecifications
}

const presenter = async (data) => {
  let result = {
    id: UUIDGenerator.from(data._id).toString(),
    idUser: UUIDGenerator.from(data.idUser).toString(),
    idInventory: UUIDGenerator.from(data.idInventory).toString(),
    created_at: data.created_at

  }

  return result
}

export default {
  present: presenter,
  presentMap: presenterMap
}
