import { useState, useCallback, useEffect } from 'react'
import { toast } from 'react-toastify'
import { AirlineModel } from '../../../Services/Airlines/airlinesModel'
import { ListServices } from '../../../Services/Airlines/ListServices'

const useAirlines = (): [AirlineModel[], boolean] => {
  const [airlines, setAirlines] = useState<AirlineModel[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const getAllAirlines = useCallback(async () => {
    setIsLoading(true)
    try {
      const { data } = await ListServices()
      setIsLoading(false)
      setAirlines(data)
    } catch (error) {
      toast.error(`Ups, something went wrong`)
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    getAllAirlines()
  }, [])
  return [airlines, isLoading]
}
export default useAirlines
