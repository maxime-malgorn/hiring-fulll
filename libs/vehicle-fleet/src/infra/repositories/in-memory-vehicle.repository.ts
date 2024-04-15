import { VehicleRepository } from '../../domain/vehicle/vehicle-repository';
import { Vehicle } from '../../domain/vehicle/vehicle';

export class InMemoryVehicleRepository implements VehicleRepository {
  private vehicles: Vehicle[] = [];

  public async findByPlate(plate: string): Promise<Vehicle | null> {
    return this.vehicles.find((f) => f.plate === plate) || null;
  }

  public async insert(vehicle: Vehicle): Promise<void> {
    this.vehicles.push(vehicle);
  }

  public async update(vehicle: Vehicle): Promise<void> {
    this.vehicles = this.vehicles.map((v) =>
      v.plate === vehicle.plate ? vehicle : v
    );
  }
}
