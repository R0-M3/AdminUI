import React from 'react'

function Check({id}) {
  return (
    <>
        <input className='checkBox mx-auto' type='checkbox' value={id}/>
    </>
  )
}

export default Check