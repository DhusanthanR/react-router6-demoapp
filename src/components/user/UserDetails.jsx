import React from 'react'
import { useParams } from 'react-router-dom'

const UserDetails = () => {
  const { userId } = useParams ();
  // const param = useParams ();
  // const userId = param.userId;
  return (
    <div>UserDetails {userId}</div>
  )
}

export default UserDetails;