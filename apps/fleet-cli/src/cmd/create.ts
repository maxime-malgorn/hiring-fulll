import { app } from '../main';
import { logError, logSuccess } from '../logger';

export const createCommand = async (fleetId: string): Promise<void> => {
  try {
    await app.fleetCommands.create(fleetId);
    logSuccess(`Fleet created with id ${fleetId}`);
  } catch (error) {
    logError('Cannot create the fleet', error);
  }
};
