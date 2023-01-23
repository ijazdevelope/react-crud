import React from 'react';

const Table = () => {
  return (
    <>
      <h2 className='p-0 mt-2 mb-3'>Employee Data</h2>
      <table class="table table-bordered text-white">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
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