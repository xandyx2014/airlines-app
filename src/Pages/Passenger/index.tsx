import { Navbar } from '../../Shared/Navbar'
import style from './passenger.module.css'
import usePassenger from './hook/usePassenger'
import { Avatar } from '../../Shared/Avatar'

const Aeirlines = () => {
  const [passengers] = usePassenger()
  return (
    <>
      <Navbar />
      <div className={style.cards}>
        {passengers.map((passenger) => {
          return (
            <Avatar
              key={passenger._id}
              name={passenger.name}
              trips={passenger.trips}
            />
          )
        })}
      </div>
    </>
  )
}
export default Aeirlines
