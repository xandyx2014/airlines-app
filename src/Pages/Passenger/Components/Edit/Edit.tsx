/* eslint-disable no-unused-vars */
import Modal from 'react-modal'
import { useForm, SubmitHandler } from 'react-hook-form'
import { toast } from 'react-toastify'
import { Passenger } from '../../../../Services/Passenger/passengerModel'
import { Context, CreateStrategy, UpdateStrategy } from './Strategy'

interface FormInput {
  name: string
  trips: number
  airline: number
}
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}
export enum Status {
  create = 'create',
  update = 'update',
}
interface EditModalProps {
  passenger?: Passenger
  modalIsOpen: boolean
  closeModal: () => void
  onRequest: () => void
  status: Status
}

export default function EditModal({
  passenger,
  modalIsOpen,
  closeModal,
  onRequest,
  status,
}: EditModalProps) {
  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    console.log('after')
  }
  const contextStrategy = new Context(new CreateStrategy())
  const { register, handleSubmit } = useForm<FormInput>()
  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    try {
      const strategy =
        status === Status.create ? new CreateStrategy() : new UpdateStrategy()
      contextStrategy.setStrategy(strategy)
      await contextStrategy.requestHandle(passenger?._id ?? '', {
        name: data.name,
        airline: data.airline,
        trips: data.trips,
      })
      toast.success(`${status} successfully`)
      closeModal()
      onRequest()
    } catch (error) {
      toast.error(`Update passenger failed...`)
    }
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
        contentLabel="Example Modal"
      >
        <span onClick={closeModal}>❌</span>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="label" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            className="input"
            defaultValue={passenger?.name ?? ''}
            {...register('name', {})}
          />
          <label className="label" htmlFor="trips">
            trips
          </label>
          <input
            id="trips"
            className="input"
            defaultValue={passenger?.trips ?? ''}
            {...register('trips', {})}
          />
          <label className="label" htmlFor="airline">
            airline
          </label>
          <input
            id="airline"
            defaultValue={passenger?.airline.length ?? ''}
            className="input"
            {...register('airline', {})}
          />

          <button>{status}</button>
        </form>
      </Modal>
    </div>
  )
}
