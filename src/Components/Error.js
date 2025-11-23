import React from 'react'
import { useRouteError } from 'react-router-dom';
const Error = () => {
    const err = useRouteError()
  return (
    <>
    <div className='error'>
        <h1>OOPS!!!</h1>
        <h2>somethinf went wrong !</h2>
        {err.status}:{err.statusText}
    </div>
    </>
  )
}

export default Error