import { Navbar } from '../../Shared/Navbar'
import style from './passenger.module.css'
import usePassenger from './hook/usePassenger'
import { Avatar } from '../../Shared/Avatar'
import ViewModal from './Components/View'
import { useRef, useState } from 'react'
import { AirlineModel } from '../../Services/Airlines/airlinesModel'

const Aeirlines = () => {
  const [passengers] = usePassenger()
  const [modal, setModal] = useState(false)
  const currentPassenger = useRef<AirlineModel[]>([])
  const closeModal = () => {
    setModal(false)
  }
  return (
    <>
      <Navbar />
      <div className={style.cards}>
        {passengers.map((passenger) => {
          return (
            <Avatar
              key={passenger._id}
              passenger={passenger}
              onClick={(passenger) => {
                currentPassenger.current = passenger
                setModal(true)
              }}
            />
          )
        })}
        <ViewModal
          modalIsOpen={modal}
          airlines={currentPassenger.current}
          closeModal={closeModal}
        />
      </div>
    </>
  )
}
export default Aeirlines
