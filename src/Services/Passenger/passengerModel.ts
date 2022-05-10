// Generated by https://quicktype.io

import { AirlineModel } from '../Airlines/airlinesModel'

export interface Pagination<T> {
  totalPassengers: number
  totalPages: number
  data: T[]
}

export interface Passenger {
  _id: string
  name: string
  trips: number
  airline: AirlineModel[]
  airlines: number
  __v: number
}
