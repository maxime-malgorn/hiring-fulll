import { VehicleRepository } from '../../domain/vehicle/vehicle-repository';
import { Vehicle } from '../../domain/vehicle/vehicle';
import { Location } from '../../domain/location';

export class VehicleService {
  constructor(private readonly repository: VehicleRepository) {}

  public async getVehicleByPlate(plate: string): Promise<Vehicle | null> {
    return this.repository.findByPlate(plate);
  }

  public async registerVehicle(vehicle: Vehicle): Promise<void> {
    return this.repository.save(vehicle);
  }

  public async updateVehicleParkLocation(
    vehicle: Vehicle,
    location: Location
  ): Promise<void> {
    vehicle.parkLocation = location;
    return this.repository.save(vehicle);
  }
}
