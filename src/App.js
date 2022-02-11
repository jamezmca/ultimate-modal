import React, { useState } from 'react'
import Modal from './components/Modal';
function App() {
  const [openModal, setOpenModal] = useState(false)
  return (
    <div style={{ height: '100vh', position: 'relative' }}>
      <Modal title="my crappy modal" open={openModal} closeModal={() => setOpenModal(false)}>
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
