import { Location } from '../../domain/location';
import { VehicleRepository } from '../../domain/vehicle/vehicle-repository';

export class VehicleQueries {
  constructor(private readonly repository: VehicleRepository) {}

  public async getVehicleParkLocation(plate: string): Promise<Location | null> {
    const vehicle = await this.repository.findByPlate(plate);
    if (vehicle === null) {
      throw new Error('Vehicle not found');
    }
    return vehicle.parkLocation;
  }
}
