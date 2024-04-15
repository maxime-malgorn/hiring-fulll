import { Given } from '@cucumber/cucumber';
import { context } from './context.steps';

export const fleetId = 'fleet-1';
export const vehiclePlate = 'AA-123-AA';

Given('my fleet', async () => await context.fleetCommands.create(fleetId));

Given(
  'a vehicle',
  async () => await context.vehicleCommands.register(vehiclePlate)
);

Given(
  'I have registered this vehicle into my fleet',
  async () => await context.fleetCommands.registerVehicle(fleetId, vehiclePlate)
);
