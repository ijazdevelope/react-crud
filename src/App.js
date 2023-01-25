import { useState } from 'react';
import './App.css';
import Modal from './components/Modal';
import ModalChildren from './components/ModalChildren';
import Table from './components/Table';


const App = () => {
const [openModal, setOpenModal] = useState(false);

  return (
    <div className="container">
      <div className='row'>
        <Table openModal={() => setOpenModal(true)} />

        {openModal &&
        <ModalChildren
          openModal={openModal}
          closeModal={() => setOpenModal(false)}
        />
      }
        {/* <Modal openModal={true} closeModal={() => setOpenModal(false)} /> */}
      </div>
    </div>
  );
}

export default App;
