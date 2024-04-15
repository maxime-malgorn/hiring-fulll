import { VehicleRepository } from '../../domain/vehicle/vehicle-repository';
import { Vehicle } from '../../domain/vehicle/vehicle';
import { VehicleEntity } from '../entities/vehicle.entity';
import { EntityMapper } from '../mappers/entity-mapper';
import { Collection, Db } from 'mongodb';

export class MongoVehicleRepository implements VehicleRepository {
  private readonly collection: Collection<VehicleEntity>;

  constructor(
    database: Db,
    private readonly mapper: EntityMapper<VehicleEntity, Vehicle>
  ) {
    this.collection = database.collection<VehicleEntity>('vehicles');
  }

  public async findByPlate(plate: string): Promise<Vehicle | null> {
    return this.mapper.toDomain(await this.collection.findOne({ plate }));
  }

  public async insert(vehicle: Vehicle): Promise<void> {
    await this.collection.insertOne(this.mapper.toEntity(vehicle));
  }

  public async update(vehicle: Vehicle): Promise<void> {
    await this.collection.updateOne(
      { plate: vehicle.plate },
      { $set: this.mapper.toEntity(vehicle) }
    );
  }
}
