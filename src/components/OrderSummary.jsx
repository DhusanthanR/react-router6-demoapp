import React from 'react'
import {useNavigate} from 'react-router-dom'

const OrderSummary = () => {
    const navigate = useNavigate();
  return (
    <>
        <div>OrderSummary</div>
        <button onClick={() => navigate(-1)}> GoBack </button>
    </>
  )
}

export default OrderSummary