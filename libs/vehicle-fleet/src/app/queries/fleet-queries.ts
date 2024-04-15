import { FleetRepository } from '../../domain/fleet/fleet-repository';

export class FleetQueries {
  constructor(private readonly repository: FleetRepository) {}

  public async isVehicleInFleet(
    fleetId: string,
    vehiclePlate: string
  ): Promise<boolean> {
    const fleet = await this.repository.findById(fleetId);
    if (fleet === null) {
      throw new Error('Fleet not found');
    }
    return fleet.vehicles.some((vehicle) => vehicle.plate === vehiclePlate);
  }
}
