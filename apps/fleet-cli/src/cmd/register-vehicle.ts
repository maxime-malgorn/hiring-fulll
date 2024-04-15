import { app } from '../main';
import { logError, logSuccess } from '../logger';

export const registerVehicle = async (
  fleetId: string,
  vehiclePlateNumber: string
): Promise<void> => {
  try {
    await app.vehicleCommands.register(vehiclePlateNumber);
    await app.fleetCommands.registerVehicle(fleetId, vehiclePlateNumber);
    logSuccess(
      `Vehicle ${vehiclePlateNumber} created and registered to fleet ${fleetId}`
    );
  } catch (error) {
    logError('Cannot register vehicle to fleet', error);
  }
};
