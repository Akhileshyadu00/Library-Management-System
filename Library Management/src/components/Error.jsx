import { useRouteError } from 'react-router-dom'

import React from 'react'

function Error() {

    const err = useRouteError()
    console.log(err);
    

  return (
    <>
      <h1>Oops!!</h1>
      <h2>Please enter correct path</h2>
      <h3>{err.status} {err.statusText}</h3>
      <h3>{err.data}</h3>
    </>
  )
}

export default Error
