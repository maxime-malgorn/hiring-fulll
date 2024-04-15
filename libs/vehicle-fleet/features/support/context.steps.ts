import { After, Before } from '@cucumber/cucumber';
import {
  createContext,
  createInMemoryInfrastructureModule,
  createMongoInfrastructureModule,
  InfrastructureModule,
  type VehicleFleetContext,
} from '../../src';
import { MongoMemoryServer } from 'mongodb-memory-server';

export let context: VehicleFleetContext;

let mongoServer: MongoMemoryServer;

Before(async function () {
  let infraModule: InfrastructureModule;
  if (this.parameters['mongo']) {
    mongoServer = await MongoMemoryServer.create();
    infraModule = await createMongoInfrastructureModule(mongoServer.getUri());
  } else {
    infraModule = createInMemoryInfrastructureModule();
  }
  context = createContext(infraModule);
});

After(async () => {
  await context.end();
  await mongoServer?.stop();
});
