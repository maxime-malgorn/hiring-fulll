import { Location } from '../location';

/**
 * Represents a vehicle.
 */
export class Vehicle {
  /**
   * Regex of vehicle plates pattern in France.
   * @private
   */
  private static readonly PLATE_REGEX = /[A-Z0-9]{2}-[A-Z0-9]{3}-[A-Z0-9]{2}/;

  public readonly plate: string;

  private _parkLocation: Location | null;

  constructor(plate: string, parkLocation: Location | null = null) {
    Vehicle.verify(plate);
    this.plate = plate;
    this._parkLocation = parkLocation;
  }

  public get parkLocation(): Location | null {
    return this._parkLocation;
  }

  /**
   * Parks the vehicle at the given location.
   *
   * @param location the location
   * @throws Error an error if the vehicle is already parked at this location
   */
  public set parkLocation(location: Location) {
    if (this._parkLocation?.equals(location)) {
      throw new Error('Vehicle is already parked at this location');
    }
    this._parkLocation = location;
  }

  /**
   * Verify if the vehicle can be created.
   *
   * @param plate the plate to verify
   * @throws Error an error if the plate is invalid
   * @private
   */
  private static verify(plate: string) {
    if (!Vehicle.PLATE_REGEX.test(plate)) {
      throw new Error('Invalid plate format');
    }
  }
}
