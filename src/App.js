import React, { useState } from 'react'
import Modal from './components/Modal';
function App() {
  const [openModal, setOpenModal] = useState(false)
  //TALK ABOUT HOW YOU COULD MAKE A CLOSE MODAL HANDLER
  function closeModalHandler() {
    setOpenModal(false)
  }

  return (
    <div style={{ height: '100vh', position: 'relative' }}>
      <Modal title="my crappy modal" open={openModal}
        // closeModal={() => setOpenModal(false)}
        closeModal={closeModalHandler}
      >
        <div style={{ border: '2px solid turquoise' }}>
          THIS is MY only child

        </div>
      </Modal>
      <div style={{
        display: 'grid',
        placeItems: 'center',
        cursor: 'pointer'
      }}
        onClick={() => setOpenModal(true)}>
        OPEN CRAPPY MODAL
      </div>
    </div>
  );
}

export default App;
