import { useState, useCallback, useEffect } from 'react'
import {
  Pagination,
  Passenger,
} from '../../../Services/Passenger/passengerModel'
import { ListServices } from '../../../Services/Passenger/ListService'
import { DeleteServices } from '../../../Services/Passenger/DeleteServices'

const useAirlines = (): [
  Pagination<Passenger> | undefined,
  ({ page, size }: { page: number; size: number }) => Promise<void>,
  (id: string) => Promise<Passenger>,
  boolean,
] => {
  const [airlines, setAirlines] = useState<Pagination<Passenger>>()
  const [isLoading, setIsLoading] = useState(false)

  const getAllAirlines = useCallback(async ({ page = 0, size = 10 }) => {
    setIsLoading(true)
    const { data } = await ListServices({ page, size })
    setIsLoading(false)
    setAirlines(data)
  }, [])
  const deletePassengerById = useCallback(async (id: string) => {
    const { data } = await DeleteServices({ id })
    return data
  }, [])
  useEffect(() => {
    getAllAirlines({ page: 0, size: 10 })
  }, [])
  return [airlines, getAllAirlines, deletePassengerById, isLoading]
}
export default useAirlines
