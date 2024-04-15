import { Fleet } from '../../domain/fleet/fleet';
import { EntityMapper } from './entity-mapper';
import { FleetEntity } from '../entities/fleet.entity';
import { VehicleEntity } from '../entities/vehicle.entity';
import { Vehicle } from '../../domain/vehicle/vehicle';

export class FleetMapper implements EntityMapper<FleetEntity, Fleet> {
  constructor(
    private readonly vehicleMapper: EntityMapper<VehicleEntity, Vehicle>
  ) {}

  public toDomain(entity: FleetEntity | null): Fleet | null {
    if (entity === null) {
      return null;
    }
    return new Fleet(
      entity.id,
      entity.vehicles.map(
        (vehicle) => this.vehicleMapper.toDomain(vehicle) as Vehicle
      )
    );
  }

  public toEntity(fleet: Fleet): FleetEntity {
    return {
      id: fleet.id,
      vehicles: fleet.vehicles.map((vehicle) =>
        this.vehicleMapper.toEntity(vehicle)
      ),
    };
  }
}
