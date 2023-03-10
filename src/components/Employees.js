import Modal from '../components/Modal';
import React from 'react';

const Employees = () => {
    return (
        <>
            <Modal
                openModal={openModal}
                closeModal={closeModal}
            >
                <h4 className="mb-3">Employees Details</h4>
                <form>
                    <div className="row g-3">
                        <div className="col-lg-6">
                            <label className="form-control" htmlFor="f_name">First Name</label>
                            <input type="text" className="form-control" id="f_name" placeholder='First Name' />
                        </div>
                        <div className="col-lg-6">
                            <label className="form-control" htmlFor="l_name">Last Name</label>
                            <input type="text" className="form-control" id="l_name" placeholder='Last Name' />
                        </div>
                        <div className="col-lg-12">
                            <label className="form-control" htmlFor="email">Email</label>
                            <input type="email" className="form-control" id="email" placeholder='email....' />
                        </div>
                        <div className="col-lg-12">
                            <label className="form-control" htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" placeholder='password....' />
                        </div>
                    </div>
                    <button className="mt-3 btn btn-primary btn-lg" type="submit">Sign Up</button>
                </form>
            </Modal>
        </>
    )
}

export default Employees