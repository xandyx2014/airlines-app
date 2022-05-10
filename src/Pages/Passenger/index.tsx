import { Navbar } from '../../Shared/Navbar'
import style from './passenger.module.css'
import usePassenger from './hook/usePassenger'

const Aeirlines = () => {
  const [passengers] = usePassenger()
  return (
    <>
      <Navbar />
      <div className={style.cards}>
        {passengers.map((passenger) => {
          return <div key={passenger._id}>{passenger.name}</div>
        })}
      </div>
    </>
  )
}
export default Aeirlines
