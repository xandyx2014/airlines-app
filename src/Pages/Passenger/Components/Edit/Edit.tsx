/* eslint-disable no-unused-vars */
import Modal from 'react-modal'
import { useForm, SubmitHandler } from 'react-hook-form'

import { UpdateServices } from '../../../../Services/Passenger/UpdateServices'
import { CreateServices } from '../../../../Services/Passenger/SaveServices'
import { toast } from 'react-toastify'
import { Passenger } from '../../../../Services/Passenger/passengerModel'

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
interface Strategy {
  request(id: string, data: any): Promise<any>
}
class UpdateStrategy implements Strategy {
  public async request(id: string, data: any) {
    return await UpdateServices({
      id: id ?? '',
      passenger: {
        name: data.name,
        airlines: data.airline,
        trips: data.trips,
      },
    })
  }
}
class CreateStrategy implements Strategy {
  public async request(id: string, data: any) {
    return await CreateServices({
      id,
      passenger: {
        name: data.name,
        airlines: data.airline,
        trips: data.trips,
      },
    })
  }
}
class Context {
  private strategy: Strategy

  constructor(strategy: Strategy) {
    this.strategy = strategy
  }

  public setStrategy(strategy: Strategy) {
    this.strategy = strategy
  }

  public requestHandle(id: any, data: any): void {
    this.strategy.request(id, data)
  }
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
  const { register, handleSubmit } = useForm<FormInput>()
  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    try {
      await UpdateServices({
        id: passenger?._id ?? '',
        passenger: {
          name: data.name,
          airlines: data.airline,
          trips: data.trips,
        },
      })
      toast.success(`Update successfully`)
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
        {status}
        <span onClick={closeModal}>❌</span>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="label" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            className="input"
            value={passenger?.name ?? ''}
            {...register('name', {})}
          />
          <label className="label" htmlFor="trips">
            trips
          </label>
          <input
            id="trips"
            className="input"
            value={passenger?.trips ?? ''}
            {...register('trips', {})}
          />
          <label className="label" htmlFor="airline">
            airline
          </label>
          <input
            id="airline"
            value={passenger?.airline.length ?? ''}
            className="input"
            {...register('airline', {})}
          />

          <button>Submit</button>
        </form>
      </Modal>
    </div>
  )
}
