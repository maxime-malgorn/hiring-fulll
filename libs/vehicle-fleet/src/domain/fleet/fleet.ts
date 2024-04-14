import { Vehicle } from '../vehicle/vehicle';

/**
 * Represents a fleet of vehicles.
 */
export class Fleet {
  public readonly id: string;
  public readonly vehicles: Vehicle[] = [];

  constructor(id: string) {
    this.id = id;
  }

  /**
   * Adds a new vehicle to the fleet.
   * Cannot add a vehicle that already exists in the fleet.
   *
   * @param newVehicle vehicle to add
   */
  public addVehicle(newVehicle: Vehicle) {
    if (this.vehicles.some((vehicle) => vehicle.plate === newVehicle.plate)) {
      throw new Error('Vehicle already exists in this fleet');
    }
    this.vehicles.push(newVehicle);
  }
}
