import { useState, useCallback, useEffect } from 'react'
import { AirlineModel } from '../../../Services/Airlines/airlinesModel'
import { ListServices } from '../../../Services/Airlines/ListServices'

const useAirlines = (): [AirlineModel[]] => {
  const [airlines, setAirlines] = useState<AirlineModel[]>([])

  const getAllAirlines = useCallback(async () => {
    const { data } = await ListServices()
    setAirlines(data)
  }, [])

  useEffect(() => {
    getAllAirlines()
  }, [])
  return [airlines]
}
export default useAirlines
