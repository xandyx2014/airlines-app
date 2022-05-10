import { Navbar } from '../../Shared/Navbar'
import style from './passenger.module.css'
import usePassenger from './hook/usePassenger'
import { Avatar } from '../../Shared/Avatar'
import ViewModal from './Components/View'
import { useState } from 'react'

const Aeirlines = () => {
  const [passengers] = usePassenger()
  const [modal, setModal] = useState(false)
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
              onClick={() => setModal(true)}
            />
          )
        })}
        <ViewModal modalIsOpen={modal} />
      </div>
    </>
  )
}
export default Aeirlines
