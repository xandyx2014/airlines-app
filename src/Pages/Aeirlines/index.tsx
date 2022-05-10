import { useCallback, useEffect } from 'react'
// import { AirlineModel } from '../../Services/Aerilines/airlinesModel'
import { ListServices } from '../../Services/Airlines/ListServices'
import Card from '../../Shared/Card'
import { Navbar } from '../../Shared/Navbar'
import style from './aeirlines.module.css'

const useAirlines = () => {
  // const [airlines, setAirlines] = useState<AirlineModel[]>([])

  const getAllAirlines = useCallback(async () => {
    const { data } = await ListServices()
    console.log(data)
  }, [])

  useEffect(() => {
    getAllAirlines()
  }, [])
}

const Aeirlines = () => {
  useAirlines()
  return (
    <>
      <Navbar />
      <div className={style.cards}>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </>
  )
}
export default Aeirlines
