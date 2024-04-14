import { VehicleService } from '../services/vehicle-service';
import { Vehicle } from '../../domain/vehicle/vehicle';
import { Location } from '../../domain/location';

export class VehicleCommands {
  constructor(private readonly service: VehicleService) {}

  public async register(plate: string): Promise<Vehicle> {
    const vehicle = new Vehicle(plate);
    await this.service.registerVehicle(vehicle);
    return vehicle;
  }

  public async parkVehicleAt(plate: string, location: Location): Promise<void> {
    const vehicle = await this.service.getVehicleByPlate(plate);
    if (vehicle === null) {
      throw new Error('Vehicle not found');
    }
    return this.service.updateVehicleParkLocation(vehicle, location);
  }
}
