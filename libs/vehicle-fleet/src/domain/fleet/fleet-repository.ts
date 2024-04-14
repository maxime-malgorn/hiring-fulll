import { Fleet } from './fleet';

/**
 * Handles persistence of {@link Fleet}.
 */
export interface FleetRepository {
  /**
   * Finds a {@link Fleet} by id.
   * @param id the id of the {@link Fleet} to find
   */
  findById(id: string): Promise<Fleet | null>;

  /**
   * Saves a {@link Fleet}.
   * @param fleet the {@link Fleet} to save
   */
  save(fleet: Fleet): Promise<void>;
}
