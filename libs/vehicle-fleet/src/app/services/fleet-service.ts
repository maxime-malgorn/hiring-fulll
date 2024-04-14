import { FleetRepository } from '../../domain/fleet/fleet-repository';
import { Fleet } from '../../domain/fleet/fleet';
import { Vehicle } from '../../domain/vehicle/vehicle';

export class FleetService {
  constructor(private readonly repository: FleetRepository) {}

  public async getFleetById(id: string): Promise<Fleet | null> {
    return this.repository.findById(id);
  }

  public async createFleet(fleet: Fleet): Promise<void> {
    return this.repository.save(fleet);
  }

  public async registerVehicle(fleet: Fleet, vehicle: Vehicle): Promise<void> {
    fleet.addVehicle(vehicle);
    return this.repository.save(fleet);
  }
}
