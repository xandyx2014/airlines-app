import Modal from 'react-modal'
import { AirlineModel } from '../../../../Services/Airlines/airlinesModel'
import style from './view.module.css'

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
interface ViewModalProps {
  modalIsOpen: boolean
  closeModal?: () => void
  airlines: AirlineModel[]
}
export default function ViewModal({
  modalIsOpen,
  closeModal,
  airlines,
}: ViewModalProps) {
  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    console.log('after')
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
        {airlines.map((airline) => (
          <ul key={airline.id} className={style.list}>
            <li>Name: {airline.name}</li>
            <li>Country: {airline.country}</li>
            <li>Established: {airline.established}</li>
            <li>Slogan: {airline.slogan}</li>
            <li>
              Website:
              <a href={`//${airline.website}`} target="_blank">
                {airline.website}
              </a>
            </li>
          </ul>
        ))}
      </Modal>
    </div>
  )
}
