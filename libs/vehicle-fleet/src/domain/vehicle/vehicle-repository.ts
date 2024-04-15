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
   * Inserts a {@link Vehicle}.
   * @param vehicle the {@link Vehicle} to save
   */
  insert(vehicle: Vehicle): Promise<void>;

  /**
   * Updates a {@link Vehicle}.
   * @param vehicle the {@link Vehicle} to update
   */
  update(vehicle: Vehicle): Promise<void>;
}
