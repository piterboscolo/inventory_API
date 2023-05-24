import { default as mongodb } from 'mongodb'

const MongoClient = mongodb.MongoClient

class Mongo {
  constructor(connectionUri, database) {
    this._connection = null
    this._connectionUri = connectionUri
    this._database = database
  }

  async connect() {
    const mongoClient = await (new MongoClient(
      this._connectionUri,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    )
    ).connect()
    this._connection = mongoClient.db(this._database)
  }

  get connection() {
    return this._connection
  }

  aggregate(collection, statement, options) {
    return this.connection
      .collection(collection)
      .aggregate(statement, options)
      .toArray()
  }

  aggregateCount(collection, statement, options) {
    statement.push({ $count: 'total' })
    return this.connection
      .collection(collection)
      .aggregate(statement, options)
      .toArray()
  }

  find(collection, statement, options) {
    return this.connection
      .collection(collection)
      .find(statement, options).limit(
        options?.limit ? options.limit : 0
      ).skip(
        options?.skip ? options.skip : 0
      )
      .toArray()
  }

  findOne(collection, statement, options) {
    return this.connection
      .collection(collection)
      .findOne(statement, options)
  }

  findCollation(collection, statement, options) {
    return this.connection
      .collection(collection)
      .find(statement, options).collation({ locale: 'en_US', strength: 1 })
      .toArray()
  }

  findCount(collection, statement, options) {
    return this.connection
      .collection(collection)
      .find(statement, options).count()
  }

  save(collection, data) {
    const { _id } = data
    // eslint-disable-next-line no-param-reassign
    delete data._id

    return this.connection
      .collection(collection)
      .updateOne(
        { _id },
        { $set: data },
        { upsert: true }
      )
  }

  get(collection, id) {
    return this.connection
      .collection(collection)
      .findOne({ _id: id })
  }

  getAll(collection, options) {
    return this.connection
      .collection(collection)
      .find({}).limit(
        options?.limit ? options.limit : 0
      ).skip(
        options?.skip ? options.skip : 0
      )
      .toArray()
  }

  remove(collection, id) {
    return this.connection
      .collection(collection)
      .deleteOne({ _id: id })
  }
}

export default Mongo
