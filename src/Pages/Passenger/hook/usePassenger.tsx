import { useState, useCallback, useEffect } from 'react'
import { Passenger } from '../../../Services/Passenger/passengerModel'
import { ListServices } from '../../../Services/Passenger/ListService'
import { DeleteServices } from '../../../Services/Passenger/DeleteServices'

const useAirlines = (): [
  Passenger[],
  () => Promise<void>,
  (id: string) => Promise<Passenger>,
] => {
  const [airlines, setAirlines] = useState<Passenger[]>([])

  const getAllAirlines = useCallback(async () => {
    const { data } = await ListServices({ page: 0, size: 10 })
    setAirlines(data.data)
  }, [])
  const deletePassengerById = useCallback(async (id: string) => {
    const { data } = await DeleteServices({ id })
    return data
  }, [])
  useEffect(() => {
    getAllAirlines()
  }, [])
  return [airlines, getAllAirlines, deletePassengerById]
}
export default useAirlines
