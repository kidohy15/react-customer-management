import React from 'react'

const CustomerDelete = ({stateRefresh, id}) => {

  const deleteCustomer = (id) => {
    const url = '/api/customers/' + id;
    fetch(url, {
      method: 'DELETE'
    })
      .then(stateRefresh());

  }

  return (
    <div>
      <button onClick={(e) => {deleteCustomer(id)}}>삭제</button>
    </div>
  )
}

export default CustomerDelete