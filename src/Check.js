import React from 'react'

function Check({id}) {
  return (
    <>
        <input className='checkBox mx-auto w-4 h-4' type='checkbox' value={id}/>
    </>
  )
}

export default Check