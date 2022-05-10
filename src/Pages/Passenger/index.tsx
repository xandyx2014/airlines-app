import { Navbar } from '../../Shared/Navbar'
import style from './passenger.module.css'
import usePassenger from './hook/usePassenger'
import { Avatar } from '../../Shared/Avatar'
import ViewModal from './Components/View'
import EditModal from './Components/Edit'
import { useRef, useState } from 'react'
import { AirlineModel } from '../../Services/Airlines/airlinesModel'
import { toast } from 'react-toastify'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Passenger } from '../../Services/Passenger/passengerModel'

const MySwal = withReactContent(Swal)
const Aeirlines = () => {
  const [passengers, getAllAirlines, deletePassengerById] = usePassenger()
  const [modalView, setModalView] = useState(false)
  const [modalEdit, setModalEdit] = useState(false)

  const currentAirlines = useRef<AirlineModel[]>([])
  const currentPassenger = useRef<Passenger>()
  const closeModal = () => {
    setModalView(false)
    setModalEdit(false)
  }
  const deletePassenger = async (id: string) => {
    try {
      const { isConfirmed } = await MySwal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      })
      if (isConfirmed) {
        await deletePassengerById(id)
        await getAllAirlines()
        toast.success(`Passenger ${id} deleted successfully`)
      }
    } catch (error) {
      toast.error(`Ups something went wrong...`)
    }
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
                currentAirlines.current = passenger
                setModalView(true)
              }}
              onDelete={(passenger) => {
                deletePassenger(passenger._id)
              }}
              onUpdate={(passenger) => {
                currentPassenger.current = passenger
                setModalEdit(true)
              }}
            />
          )
        })}
        <ViewModal
          modalIsOpen={modalView}
          airlines={currentAirlines.current}
          closeModal={closeModal}
        />
        <EditModal modalIsOpen={modalEdit} closeModal={closeModal} />
      </div>
    </>
  )
}
export default Aeirlines
