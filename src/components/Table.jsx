import React from 'react';

const Table = ({openModal}) => {
  return (
    <>
      <div className='d-flex justify-content-between align-items-center border-bottom p-0'>
        <h2 className='p-0 mt-2 mb-3'>Employee Data</h2>
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={openModal}>Add Employee</button>
      </div>
      <table className="table mt-2">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Select</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Start Time</th>
            <th scope="col">End Time</th>
            <th scope="col">Salary</th>
            <th scope="col">Hours</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default Table;