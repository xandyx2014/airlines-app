import axiosHttp from '../axiosHttp'
import { passenger as passengerResource } from '../resources'
import { Passenger } from './passengerModel'

interface DeleteServiceProps {
  id: string
  passenger: Pick<Passenger, 'name' | 'trips' | 'airlines'>
}

export const CreateServices = ({ id, passenger }: DeleteServiceProps) => {
  return axiosHttp.post<Passenger>(`/v1/${passengerResource}`, {
    id,
    name: passenger.name,
    trips: passenger.trips,
    airline: passenger.airlines,
  })
}
