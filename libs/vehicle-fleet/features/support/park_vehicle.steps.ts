import { Given, Then, When } from '@cucumber/cucumber';
import { deepEqual, equal } from 'assert';
import { Location } from '../../src/domain/location';
import { vehiclePlate } from './common.steps';
import { context } from './context.steps';

let location: Location;
let parkError: Error;

Given('a location', () => {
  location = new Location(80, 15);
});

Given(
  'my vehicle has been parked into this location',
  async () =>
    await context.vehicleCommands.parkVehicleAt(vehiclePlate, location)
);

When('I park my vehicle at this location', async () => {
  await context.vehicleCommands.parkVehicleAt(vehiclePlate, location);
});

When('I try to park my vehicle at this location', async () => {
  try {
    await context.vehicleCommands.parkVehicleAt(vehiclePlate, location);
  } catch (e) {
    parkError = e as Error;
  }
});

Then('the known location of my vehicle should verify this location', async () =>
  deepEqual(
    location,
    await context.vehicleQueries.getVehicleParkLocation(vehiclePlate)
  )
);

Then(
  'I should be informed that my vehicle is already parked at this location',
  () => equal(parkError?.message, 'Vehicle is already parked at this location')
);
