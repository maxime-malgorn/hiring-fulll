import { FleetService } from '../services/fleet-service';
import { VehicleService } from '../services/vehicle-service';
import { Fleet } from '../../domain/fleet/fleet';

export class FleetCommands {
  constructor(
    private readonly fleetService: FleetService,
    private readonly vehicleService: VehicleService
  ) {}

  public async createFleet(fleetId: string): Promise<Fleet> {
    const fleet = new Fleet(fleetId);
    await this.fleetService.createFleet(fleet);
    return fleet;
  }

  public async registerVehicle(
    fleetId: string,
    vehiculePlate: string
  ): Promise<void> {
    const fleet = await this.fleetService.getFleetById(fleetId);
    if (fleet === null) {
      throw new Error('Fleet not found');
    }
    const vehicle = await this.vehicleService.getVehicleByPlate(vehiculePlate);
    if (vehicle === null) {
      throw new Error('Vehicle not found');
    }
    return this.fleetService.registerVehicle(fleet, vehicle);
  }
}
