import { app } from '../main';
import { logError, logSuccess } from '../logger';

export const localizeVehicle = async (
  fleetId: string,
  vehiclePlateNumber: string,
  latitude: number,
  longitude: number,
  altitude?: number
): Promise<void> => {
  try {
    await app.vehicleCommands.parkVehicleAt(
      vehiclePlateNumber,
      latitude,
      longitude,
      altitude
    );
    logSuccess(
      `Vehicle ${vehiclePlateNumber} parked at ${latitude},${longitude} with altitude ${
        altitude ?? 'not specified'
      }`
    );
  } catch (error) {
    logError('Cannot park vehicle', error);
  }
};
