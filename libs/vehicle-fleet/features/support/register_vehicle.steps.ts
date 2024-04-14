import { Given, Then, When } from '@cucumber/cucumber';
import { context, fleetId, vehiclePlate } from './common.steps';
import { equal, ok } from 'assert';

const fleet2Id = 'fleet-2';

let registerError: Error;

Given('the fleet of another user', async () =>
  context.fleetCommands.createFleet(fleet2Id)
);

Given(
  "this vehicle has been registered into the other user's fleet",
  async () => context.fleetCommands.registerVehicle(fleet2Id, vehiclePlate)
);

When('I register this vehicle into my fleet', async () =>
  context.fleetCommands.registerVehicle(fleetId, vehiclePlate)
);

When('I try to register this vehicle into my fleet', async () => {
  try {
    await context.fleetCommands.registerVehicle(fleetId, vehiclePlate);
  } catch (e) {
    registerError = e as Error;
  }
});

Then('this vehicle should be part of my vehicle fleet', async () =>
  ok(await context.fleetQueries.isVehicleInFleet(fleetId, vehiclePlate))
);

Then(
  'I should be informed this this vehicle has already been registered into my fleet',
  () => equal(registerError?.message, 'Vehicle already exists in this fleet')
);
