import Modal from 'react-modal'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Button } from '../../../Shared/Button'
import { UpdateServices } from '../../../Services/Passenger/UpdateServices'
import { toast } from 'react-toastify'

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
interface EditModalProps {
  id?: string
  modalIsOpen: boolean
  closeModal: () => void
}

export default function EditModal({
  id,
  modalIsOpen,
  closeModal,
}: EditModalProps) {
  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    console.log('after')
  }
  const { register, handleSubmit } = useForm<FormInput>()
  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    try {
      await UpdateServices({
        id: id ?? '',
        passenger: {
          name: data.name,
          airlines: data.airline,
          trips: data.trips,
        },
      })
      toast.success(`Update successfully`)
      closeModal()
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
            {...register('name', {
              required: true,
              maxLength: 15,
              pattern: /^[A-Za-z]+$/i,
            })}
          />
          <label className="label" htmlFor="trips">
            trips
          </label>
          <input
            id="trips"
            className="input"
            {...register('trips', {
              required: true,
              maxLength: 15,
              min: 18,
              max: 99,
            })}
          />
          <label className="label" htmlFor="airline">
            airline
          </label>
          <input
            id="airline"
            className="input"
            {...register('airline', {
              required: true,
              maxLength: 3,
              min: 0,
              max: 999,
            })}
          />

          <Button type="submit">Submit</Button>
        </form>
      </Modal>
    </div>
  )
}
