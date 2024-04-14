import { Before, Given } from '@cucumber/cucumber';
import { createContext, type VehicleFleetContext } from '../../src/context';
import { Fleet } from '../../src/domain/fleet/fleet';
import { Vehicle } from '../../src/domain/vehicle/vehicle';

export const fleetId = 'fleet-1';
export const vehiclePlate = 'AA-123-AA';

export let context: VehicleFleetContext;
export let fleet: Fleet;
export let vehicle: Vehicle;

Before(() => (context = createContext()));

Given('my fleet', async () => {
  fleet = await context.fleetCommands.createFleet(fleetId);
});

Given('a vehicle', async () => {
  vehicle = await context.vehicleCommands.register(vehiclePlate);
});

Given('I have registered this vehicle into my fleet', () => {
  fleet.addVehicle(vehicle);
});
