import Modal from 'react-modal'

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
}
export default function ViewModal({ modalIsOpen }: ViewModalProps) {
  const openModal = () => {}

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    console.log('after')
  }

  const closeModal = () => {}

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>close</button>
        <ul>
          <li>Coffee: 12312312</li>
          <li>Tea: 12312312</li>
          <li>Milk: 12312312</li>
        </ul>
      </Modal>
    </div>
  )
}
