import { FleetService } from '../services/fleet-service';

export class FleetQueries {
  constructor(private readonly fleetService: FleetService) {}

  public async isVehicleInFleet(
    fleetId: string,
    vehiclePlate: string
  ): Promise<boolean> {
    const fleet = await this.fleetService.getFleetById(fleetId);
    if (fleet === null) {
      throw new Error('Fleet not found');
    }
    return fleet.vehicles.some((vehicle) => vehicle.plate === vehiclePlate);
  }
}
