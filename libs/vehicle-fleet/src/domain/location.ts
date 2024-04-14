/**
 * Represents a GPS location.
 */
export class Location {
  public readonly latitude: number;
  public readonly longitude: number;
  public readonly altitude?: number;

  constructor(latitude: number, longitude: number, altitude?: number) {
    Location.verify(latitude, longitude, altitude);
    this.latitude = latitude;
    this.longitude = longitude;
    this.altitude = altitude;
  }

  public equals(other: Location): boolean {
    return (
      other.latitude === this.latitude &&
      other.longitude === this.longitude &&
      other.altitude === this.altitude
    );
  }

  /**
   * Verify that the location is valid.
   *
   * @param latitude latitude to verify
   * @param longitude longitude to verify
   * @param altitude altitude to verify
   * @throws Error an error if the location is invalid
   * @private
   */
  private static verify(
    latitude: number,
    longitude: number,
    altitude?: number
  ): void {
    if (latitude < -90 || latitude > 90) {
      throw new Error('Latitude must be between -90 and 90');
    }
    if (longitude < -180 || longitude > 180) {
      throw new Error('Longitude must be between -180 and 180');
    }
    if (altitude !== undefined && (altitude < 0 || altitude > 10000)) {
      throw new Error('Altitude must be between 0 and 10000');
    }
  }
}
