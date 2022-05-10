import axiosHttp from '../axiosHttp'
import { airlines } from '../resources'
import { AirlineModel } from './airlinesModel'

export const ListServices = () => {
  return axiosHttp.get<AirlineModel[]>(`/v1/${airlines}`)
}
