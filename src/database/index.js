import { MongoClient } from 'mongodb';

// re-write to use Mongoose ORM
export default class MongoDB {
  constructor() {
    if (MongoDB.instance) return MongoDB.instance;

    MongoDB.instance = this;

    this.mongoUrl = process.env.MONGO_DB_URL;
    this.dbName = process.env.DATABASE_NAME;

    this.openConnection = this.openConnection.bind(this);
    this.findOne = this.findOne.bind(this);
  }

  openConnection(callback, collectionName, data) {
    MongoClient.connect(this.mongoUrl, { useNewUrlParser: true },
      async (err, client) => {
        if (err) throw err;
        const db = client.db(this.dbName);
        callback(db, collectionName, data);
        client.close();
      });
  }

  static insertOrUpdateOne(db, collectionName, data) {
    const { email, ...details } = data;
    db.collection(collectionName).updateOne(
      { email },
      { $set: details },
      { upsert: true },
    );
  }

  async findOne(db, collectionName, filter) {
    this.document = await db.collection(collectionName).findOne(filter);
  }
}
