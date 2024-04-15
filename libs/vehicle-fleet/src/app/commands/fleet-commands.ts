import { Fleet } from '../../domain/fleet/fleet';
import { FleetRepository } from '../../domain/fleet/fleet-repository';
import { VehicleRepository } from '../../domain/vehicle/vehicle-repository';

export class FleetCommands {
  constructor(
    private readonly fleetRepository: FleetRepository,
    private readonly vehicleRepository: VehicleRepository
  ) {}

  public async create(fleetId: string): Promise<void> {
    return this.fleetRepository.insert(new Fleet(fleetId));
  }

  public async registerVehicle(
    fleetId: string,
    vehiclePlate: string
  ): Promise<void> {
    const fleet = await this.fleetRepository.findById(fleetId);
    if (fleet === null) {
      throw new Error('Fleet not found');
    }
    const vehicle = await this.vehicleRepository.findByPlate(vehiclePlate);
    if (vehicle === null) {
      throw new Error('Vehicle not found');
    }
    fleet.addVehicle(vehicle);
    return this.fleetRepository.update(fleet);
  }
}
