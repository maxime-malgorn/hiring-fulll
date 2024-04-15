import { VehicleCommands } from './app/commands/vehicle-commands';
import { FleetCommands } from './app/commands/fleet-commands';
import { VehicleQueries } from './app/queries/vehicle-queries';
import { FleetQueries } from './app/queries/fleet-queries';
import { InfrastructureModule } from './infra/module';

export interface VehicleFleetContext {
  fleetCommands: FleetCommands;
  fleetQueries: FleetQueries;
  vehicleCommands: VehicleCommands;
  vehicleQueries: VehicleQueries;
  end: () => Promise<void>;
}

export const createContext = (
  infraModule: InfrastructureModule
): VehicleFleetContext => ({
  fleetCommands: new FleetCommands(
    infraModule.fleetRepository,
    infraModule.vehicleRepository
  ),
  fleetQueries: new FleetQueries(infraModule.fleetRepository),
  vehicleCommands: new VehicleCommands(infraModule.vehicleRepository),
  vehicleQueries: new VehicleQueries(infraModule.vehicleRepository),
  end: async () => infraModule.end(),
});
