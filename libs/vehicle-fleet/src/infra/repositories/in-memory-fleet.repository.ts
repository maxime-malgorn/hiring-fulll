import { FleetRepository } from '../../domain/fleet/fleet-repository';
import { Fleet } from '../../domain/fleet/fleet';

export class InMemoryFleetRepository implements FleetRepository {
  private fleets: Fleet[] = [];

  public async findById(id: string): Promise<Fleet | null> {
    return this.fleets.find((f) => f.id === id) || null;
  }

  public async insert(fleet: Fleet): Promise<void> {
    this.fleets.push(fleet);
  }

  public async update(fleet: Fleet): Promise<void> {
    this.fleets = this.fleets.map((f) => (f.id === fleet.id ? fleet : f));
  }
}
