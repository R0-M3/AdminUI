import React from 'react'

function ChangeButton({type,changePage}) {
  return (
    <button className='rounded-full w-12 h-12 mx-1 text-3xl pb-2 text-white bg-sky-500 btn-new' value={type} onClick={(e) => changePage(e.target.value)}>{type}</button>
  )
}

export default ChangeButton