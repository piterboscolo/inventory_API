import UUIDGenerator from '../../support/UUIDGenerator.mjs'


const presenterMap = (data) => {
  const resultUserSpecifications = data.map((Temp) => {
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

  return resultUserSpecifications
}

const presenter = async (data) => {
  let result = {
    id: UUIDGenerator.from(data._id).toString(),
    type: data.type,
    model: data.model,
    patrimony: data.patrimony,
    series: data.series,
    created_at: data.created_at

  }

  return result
}

export default {
  present: presenter,
  presentMap: presenterMap
}
