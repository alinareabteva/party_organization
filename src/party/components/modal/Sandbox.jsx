import React, { useState } from 'react';
import Modal from './Modal';
import Button from '../button/Button';

const Sandbox = () => {
  const [state, setState] = useState({
    isOpen: false,
  })
  
  const openModal = () => {
    setState({ isOpen: true });
  }

  const handleSubmit = () => {
    console.log('Yes function!');
    setState({ isOpen: false });
  }

  const handleCancel = () => {
    console.log('Cancel function!');
    setState({ isOpen: false });
  }

 
  return (
    <>
      <h2 className="text"><span>1. Base Dialog (Modal) window:</span></h2>
      <Button onClick={openModal}>Show modal</Button>
      <Modal
        title="The confirmation"
        isOpen={state.isOpen}
        onCancel={handleCancel}
        onSubmit={handleSubmit}
      >
      <p>
        Your data won't be saved! Are you sure you want to quit registration process?
      </p>
      </Modal>

    </>
  );
}


export default Sandbox;