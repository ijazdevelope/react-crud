import React from 'react';
import Modal from '../components/Modal';

const ModalChildren = ({ openModal, closeModal }) => {
    return (
        <>
            <Modal
                openModal={openModal}
                closeModal={closeModal}
            >
                <div className='c-modal-overlay__content__wrapper'>
                    <h4 className="mb-3"></h4>
                </div>
                <form>
                    <div className="row g-3">
                        <div className="col-lg-6">
                            <label className="form-check-label" htmlFor="name">First Name</label>
                            <input type="text" className="form-control" id="name" placeholder='First Name' />
                        </div>
                        <div className="col-lg-6">
                            <label className="form-check-label" htmlFor="age">Age</label>
                            <input type="number" className="form-control" id="age" placeholder='Age...' />
                        </div>
                        <div className="col-lg-6">
                            <label className="form-check-label" htmlFor="start-time">Start Time</label>
                            <input type="time" className="form-control" id="start-time" placeholder='Start Time' />
                        </div>
                        <div className="col-lg-6">
                            <label className="form-check-label" htmlFor="end-time">End Time</label>
                            <input type="time" className="form-control" id="end-time" placeholder='Start Time' />
                        </div>
                        <div className="col-lg-6">
                            <label className="form-check-label" htmlFor="salary">Salary</label>
                            <input type="text" className="form-control" id="salary" placeholder='Salary...' />
                        </div>
                        <div className="modal-footer">
                            <button type="submit" className="btn btn-primary">Add Employee</button>
                        </div>
                    </div>
                </form>
            </Modal>
        </>
    )
}

export default ModalChildren;
