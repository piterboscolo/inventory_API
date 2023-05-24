/* eslint-disable no-param-reassign */
class paginator {
  static execute(params) {
    const limit = params?.limit ? params.limit : 20
    const page = params?.page ? params.page : 1
    const skip = limit * (page - 1)

    const result = {
      limit,
      skip,
      page
    }
    return result
  }
}
export default paginator
