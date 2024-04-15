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
   * Inserts a {@link Fleet}.
   * @param fleet the {@link Fleet} to save
   */
  insert(fleet: Fleet): Promise<void>;

  /**
   * Updates a {@link Fleet}.
   * @param fleet the {@link Fleet} to update
   */
  update(fleet: Fleet): Promise<void>;
}
