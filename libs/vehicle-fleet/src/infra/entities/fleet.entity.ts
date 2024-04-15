import { VehicleEntity } from './vehicle.entity';

export interface FleetEntity {
  id: string;
  vehicles: VehicleEntity[];
}
