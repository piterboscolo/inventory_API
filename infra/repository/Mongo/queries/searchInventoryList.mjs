function query(params) {
  const options = []

  if (params?.model) {
    options.push(
      {
        model: params.model
      }
    )
  }
  
  if (params?.brand) {
    options.push(
      {
        brand: params.brand
      }
    )
  }

  if (params?.type) {
    options.push(
      {
        type: params.type
      }
    )
  }

  const resultQuery = {
    $and: [
      ...options
    ]
  }
  return resultQuery
}
  

export default {
  collection: 'inventory',
  query
};