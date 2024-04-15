import { program } from 'commander';
import {
  createContext,
  createMongoInfrastructureModule,
  VehicleFleetContext,
} from '@hiring-fulll/vehicle-fleet';
import { createCommand } from './cmd/create';
import { registerVehicle } from './cmd/register-vehicle';
import { localizeVehicle } from './cmd/localize-vehicle';

export let app: VehicleFleetContext;

(async () => {
  app = createContext(
    await createMongoInfrastructureModule(process.env.MONGO_URL)
  );

  program
    .command('create <fleetId>')
    .description('Create a new fleet')
    .action(createCommand);

  program
    .command('register-vehicle <fleetId> <vehiclePlateNumber>')
    .description('Create a vehicle and register it to a fleet')
    .action(registerVehicle);

  program
    .command(
      'localize-vehicle <fleetId> <vehiclePlateNumber> <latitude> <longitude> [altitude]'
    )
    .description('Park a vehicle at a specific location')
    .action(localizeVehicle);

  program.parseAsync().then(app.end);
})();
