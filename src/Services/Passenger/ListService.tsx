import axiosHttp from '../axiosHttp'
import { passenger } from '../resources'
import { Pagination, Passenger } from './passengerModel'

interface ListServicesProps {
  page?: number
  size?: number
}
export const ListServices = ({ page = 0, size = 10 }: ListServicesProps) => {
  const paramsString = new URLSearchParams()
  paramsString.append('page', page.toString())
  paramsString.append('size', size.toString())
  return axiosHttp.get<Pagination<Passenger>>(
    `/v1/${passenger}?${paramsString.toString()}`,
  )
}
