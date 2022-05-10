import axiosHttp from '../axiosHttp'
import { passenger as passengerResource } from '../resources'
import { Passenger } from './passengerModel'

interface DeleteServiceProps {
  id: string
  passenger: Passenger
}
interface Response {
  message: string
}
export const DeleteServices = ({ id, passenger }: DeleteServiceProps) => {
  return axiosHttp.put<Response>(`/v1/${passengerResource}/${id}`, {
    name: passenger.name,
    trips: passenger.trips,
    airline: passenger.airline,
  })
}
