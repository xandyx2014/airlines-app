import axiosHttp from '../axiosHttp'
import { passenger } from '../resources'
import { Passenger } from './passengerModel'

interface DeleteServiceProps {
  id: string
}
export const DeleteServices = ({ id }: DeleteServiceProps) => {
  return axiosHttp.delete<Passenger>(`/v1/${passenger}/${id}`)
}
