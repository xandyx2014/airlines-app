import axiosHttp from '../axiosHttp'
import { passenger as passengerResource } from '../resources'
import { Passenger } from './passengerModel'

interface DeleteServiceProps {
  id: string
  passenger: Pick<Passenger, 'name' | 'trips' | 'airlines'>
}
interface Response {
  message: string
}
export const UpdateServices = ({ id, passenger }: DeleteServiceProps) => {
  return axiosHttp.put<Response>(`/v1/${passengerResource}/${id}`, {
    name: passenger.name,
    trips: passenger.trips,
    airline: passenger.airlines,
  })
}
