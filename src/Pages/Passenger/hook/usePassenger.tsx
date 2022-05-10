import { useState, useCallback, useEffect } from 'react'
import { Passenger } from '../../../Services/Passenger/passengerModel'
import { ListServices } from '../../../Services/Passenger/ListService'

const useAirlines = (): [Passenger[]] => {
  const [airlines, setAirlines] = useState<Passenger[]>([])

  const getAllAirlines = useCallback(async () => {
    const { data } = await ListServices({ page: 0, size: 10 })
    setAirlines(data.data)
  }, [])

  useEffect(() => {
    getAllAirlines()
  }, [])
  return [airlines]
}
export default useAirlines
