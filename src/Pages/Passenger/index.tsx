import { Navbar } from '../../Shared/Navbar'
import style from './passenger.module.css'
import usePassenger from './hook/usePassenger'
import { Avatar } from '../../Shared/Avatar'
import ViewModal from './Components/View/View'
import EditModal, { Status } from './Components/Edit/Edit'
import { useRef, useState } from 'react'
import { AirlineModel } from '../../Services/Airlines/airlinesModel'
import { toast } from 'react-toastify'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Passenger } from '../../Services/Passenger/passengerModel'
import { Button } from '../../Shared/Button'
import { Loading } from '../../Shared/Loading/Loading'
import Pagination from 'rc-pagination'
import LinearProgressIndicator from '../../Shared/LinearProgressIndicator'
const MySwal = withReactContent(Swal)
const Aeirlines = () => {
  const [passengers, getAllAirlines, deletePassengerById, isLoading] =
    usePassenger()
  const [modalView, setModalView] = useState(false)
  const [modalEdit, setModalEdit] = useState(false)
  const [pagination, setPagination] = useState({
    page: 1,
    size: 10,
  })
  const [state, setState] = useState<Status>(Status.create)
  const [isDelete, setIsDelete] = useState(false)
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
        setIsDelete(true)
        await deletePassengerById(id)
        await getAllAirlines(pagination)
        toast.success(`Passenger ${id} deleted successfully`)
        setIsDelete(false)
      }
    } catch (error) {
      toast.error(`Ups something went wrong...`)
      setIsDelete(false)
    }
  }
  return (
    <>
      <Navbar />
      {isDelete && <LinearProgressIndicator />}
      {isLoading && <Loading />}

      {isLoading || (
        <>
          <div className={style['button-create']}>
            <Button
              onClick={() => {
                setState(Status.create)
                setModalEdit(true)
              }}
            >
              Create Passenger 📚
            </Button>
          </div>
          <Pagination
            className="ant-pagination"
            defaultCurrent={pagination.page}
            onChange={async (page) => {
              setPagination({
                page,
                size: 10,
              })
              await getAllAirlines(pagination)
            }}
            total={passengers?.totalPages ?? 0}
          />
        </>
      )}
      <br />
      <div className={style.cards}>
        {passengers?.data.map((passenger) => {
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
                setState(Status.update)
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
        <EditModal
          passenger={currentPassenger.current}
          status={state}
          modalIsOpen={modalEdit}
          closeModal={closeModal}
          onRequest={() => {
            getAllAirlines(pagination)
          }}
        />
      </div>
      <div></div>
    </>
  )
}
export default Aeirlines
