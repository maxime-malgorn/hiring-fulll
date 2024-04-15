import { LocationEntity } from './location.entity';

export interface VehicleEntity {
  plate: string;
  parkLocation: LocationEntity | null;
}
