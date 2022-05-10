import { CreateServices } from '../../../../Services/Passenger/SaveServices'
import { UpdateServices } from '../../../../Services/Passenger/UpdateServices'

interface Strategy {
  request(id: string, data: any): Promise<any>
}
export class UpdateStrategy implements Strategy {
  public async request(id: string, data: any) {
    return await UpdateServices({
      id: id ?? '',
      passenger: {
        name: data.name,
        airlines: data.airline,
        trips: data.trips,
      },
    })
  }
}
export class CreateStrategy implements Strategy {
  public async request(id: string, data: any) {
    return await CreateServices({
      id,
      passenger: {
        name: data.name,
        airlines: data.airline,
        trips: data.trips,
      },
    })
  }
}
export class Context {
  private strategy: Strategy

  constructor(strategy: Strategy) {
    this.strategy = strategy
  }

  public setStrategy(strategy: Strategy) {
    this.strategy = strategy
  }

  public requestHandle(id: any, data: any) {
    return this.strategy.request(id, data)
  }
}
