import { VehicleService } from '../services/vehicle-service';
import { Location } from '../../domain/location';

export class VehicleQueries {
  constructor(private readonly service: VehicleService) {}

  public async getVehicleParkLocation(
    plate: string
  ): Promise<Location | null> {
    const vehicle = await this.service.getVehicleByPlate(plate);
    if (vehicle === null) {
      throw new Error('Vehicle not found');
    }
    return vehicle.parkLocation;
  }
}
