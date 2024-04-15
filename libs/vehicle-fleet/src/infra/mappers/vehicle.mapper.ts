import { VehicleEntity } from '../entities/vehicle.entity';
import { Vehicle } from '../../domain/vehicle/vehicle';
import { LocationEntity } from '../entities/location.entity';
import { Location } from '../../domain/location';
import { EntityMapper } from './entity-mapper';

export class VehicleMapper implements EntityMapper<VehicleEntity, Vehicle> {
  public toDomain(entity: VehicleEntity | null): Vehicle | null {
    if (entity === null) {
      return null;
    }
    return new Vehicle(
      entity.plate,
      this.toLocationDomain(entity.parkLocation)
    );
  }

  public toEntity(vehicle: Vehicle): VehicleEntity {
    return {
      plate: vehicle.plate,
      parkLocation: this.toLocationEntity(vehicle.parkLocation),
    };
  }

  private toLocationDomain(entity: LocationEntity | null): Location | null {
    if (entity === null) {
      return null;
    }
    return new Location(
      entity.latitude,
      entity.longitude,
      entity.altitude ?? undefined
    );
  }

  private toLocationEntity(location: Location | null): LocationEntity | null {
    if (location === null) {
      return null;
    }
    return {
      latitude: location.latitude,
      longitude: location.longitude,
      altitude: location.altitude,
    };
  }
}
