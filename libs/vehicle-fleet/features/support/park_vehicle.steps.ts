import { Given, Then, When } from '@cucumber/cucumber';
import { equal } from 'assert';
import { Location } from '../../src/domain/location';
import { context, vehicle, vehiclePlate } from './common.steps';

let location: Location;
let parkError: Error;

Given('a location', () => {
  location = new Location(80, 15);
});

Given('my vehicle has been parked into this location', () => {
  vehicle.parkLocation = location;
});

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
  equal(
    await context.VehicleQueries.getVehicleParkLocation(vehiclePlate),
    location
  )
);

Then(
  'I should be informed that my vehicle is already parked at this location',
  () => equal(parkError?.message, 'Vehicle is already parked at this location')
);
