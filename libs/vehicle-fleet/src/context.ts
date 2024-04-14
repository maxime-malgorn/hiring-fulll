import { VehicleCommands } from './app/commands/vehicle-commands';
import { VehicleService } from './app/services/vehicle-service';
import { InMemoryVehicleRepository } from './infra/repositories/in-memory-vehicle-repository';
import { FleetCommands } from './app/commands/fleet-commands';
import { FleetService } from './app/services/fleet-service';
import { InMemoryFleetRepository } from './infra/repositories/in-memory-fleet-repository';
import { VehicleQueries } from './app/queries/vehicle-queries';
import { FleetQueries } from './app/queries/fleet-queries';

export interface VehicleFleetContext {
  fleetCommands: FleetCommands;
  fleetQueries: FleetQueries;
  vehicleCommands: VehicleCommands;
  VehicleQueries: VehicleQueries;
}

export const createContext = (): VehicleFleetContext => {
  const fleetService = new FleetService(new InMemoryFleetRepository());
  const vehicleService = new VehicleService(new InMemoryVehicleRepository());

  return {
    fleetCommands: new FleetCommands(fleetService, vehicleService),
    fleetQueries: new FleetQueries(fleetService),
    vehicleCommands: new VehicleCommands(vehicleService),
    VehicleQueries: new VehicleQueries(vehicleService),
  };
};
