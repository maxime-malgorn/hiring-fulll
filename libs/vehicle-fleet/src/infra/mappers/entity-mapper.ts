/**
 * Maps domain objects to entities and vice versa.
 */
export interface EntityMapper<E, D> {
  /**
   * Transforms an entity to a domain object.
   * @param entity the entity to transform
   */
  toDomain: (entity: E | null) => D | null;

  /**
   * Transforms a domain object to an entity.
   * @param domain the domain object to transform
   */
  toEntity: (domain: D) => E;
}
