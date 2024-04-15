import { MongoMemoryServer } from 'mongodb-memory-server';

export default async () => {
  global.mongoServer = await MongoMemoryServer.create();
  process.env['MONGO_URL'] = global.mongoServer.getUri();
};
