import { Vehicle } from '../../domain/vehicle/vehicle';
import { Location } from '../../domain/location';
import { VehicleRepository } from '../../domain/vehicle/vehicle-repository';

export class VehicleCommands {
  constructor(private readonly repository: VehicleRepository) {}

  public async register(plate: string): Promise<void> {
    return this.repository.insert(new Vehicle(plate));
  }

  public async parkVehicleAt(plate: string, location: Location): Promise<void> {
    const vehicle = await this.repository.findByPlate(plate);
    if (vehicle === null) {
      throw new Error('Vehicle not found');
    }
    vehicle.parkLocation = location;
    return this.repository.update(vehicle);
  }
}
