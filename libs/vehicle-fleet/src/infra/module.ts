import { FleetRepository } from '../domain/fleet/fleet-repository';
import { VehicleRepository } from '../domain/vehicle/vehicle-repository';
import { InMemoryFleetRepository } from './repositories/in-memory-fleet.repository';
import { InMemoryVehicleRepository } from './repositories/in-memory-vehicle.repository';
import { MongoFleetRepository } from './repositories/mongo-fleet.repository';
import { MongoVehicleRepository } from './repositories/mongo-vehicle.repository';
import { VehicleMapper } from './mappers/vehicle.mapper';
import { FleetMapper } from './mappers/fleet.mapper';
import { MongoClient } from 'mongodb';

export interface InfrastructureModule {
  fleetRepository: FleetRepository;
  vehicleRepository: VehicleRepository;
  end: () => Promise<void>;
}

export const createInMemoryInfrastructureModule = (): InfrastructureModule => ({
  fleetRepository: new InMemoryFleetRepository(),
  vehicleRepository: new InMemoryVehicleRepository(),
  end: async () => void 0,
});

export const createMongoInfrastructureModule = async (
  mongoUrl: string
): Promise<InfrastructureModule> => {
  const mongoClient = await new MongoClient(mongoUrl).connect();
  const database = mongoClient.db();
  const vehicleMapper = new VehicleMapper();
  const fleetMapper = new FleetMapper(vehicleMapper);
  return {
    fleetRepository: new MongoFleetRepository(database, fleetMapper),
    vehicleRepository: new MongoVehicleRepository(database, vehicleMapper),
    end: async () => mongoClient.close(),
  };
};
