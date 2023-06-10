import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
    
    const navigate = useNavigate()

  return (
    <div>
        <h1 className='d-flex text-center'>Oops, page doesn't exist</h1>
        <div className='d-flex justify-content-center'>
            <button onClick={()=> navigate(-1)} className='btn btn-warning'>Volver</button>
        </div>
    </div>
  )
}

export default Error