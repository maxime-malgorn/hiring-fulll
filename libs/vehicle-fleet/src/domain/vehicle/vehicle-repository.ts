import { Vehicle } from './vehicle';

/**
 * Handles persistence of {@link Vehicle}.
 */
export interface VehicleRepository {
  /**
   * Finds a {@link Vehicle} by id.
   * @param plate the plate of the {@link Vehicle} to find
   */
  findByPlate(plate: string): Promise<Vehicle | null>;

  /**
   * Saves a {@link Vehicle}.
   * @param vehicle the {@link Vehicle} to save
   */
  save(vehicle: Vehicle): Promise<void>;
}
