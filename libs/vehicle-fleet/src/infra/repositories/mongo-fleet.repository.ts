import { FleetRepository } from '../../domain/fleet/fleet-repository';
import { Fleet } from '../../domain/fleet/fleet';
import { FleetEntity } from '../entities/fleet.entity';
import { EntityMapper } from '../mappers/entity-mapper';
import { Collection, Db } from 'mongodb';

export class MongoFleetRepository implements FleetRepository {
  private readonly collection: Collection<FleetEntity>;

  constructor(
    database: Db,
    private readonly mapper: EntityMapper<FleetEntity, Fleet>
  ) {
    this.collection = database.collection<FleetEntity>('fleets');
  }

  public async findById(id: string): Promise<Fleet | null> {
    return this.mapper.toDomain(await this.collection.findOne({ id }));
  }

  public async insert(fleet: Fleet): Promise<void> {
    await this.collection.insertOne(this.mapper.toEntity(fleet));
  }

  public async update(fleet: Fleet): Promise<void> {
    await this.collection.updateOne(
      { id: fleet.id },
      { $set: this.mapper.toEntity(fleet) }
    );
  }
}
