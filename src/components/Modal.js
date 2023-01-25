import React from 'react';
import '../scss/Modal.css';

const Modal = ({ openModal, children, closeModal }) => {
    console.log(openModal)
    return (
        <>
            {openModal && (
                <div className="c-modal modal fade show" id="exampleModalLive" style={{display: 'block'}} aria-modal="true" role="dialog">
                    <div className="modal-dialog modal-dialog-centered c-modal__dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLiveLabel">Login Form</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeModal}></button>
                            </div>
                            <div className="modal-body">
                                {children}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary">Add Employee</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Modal