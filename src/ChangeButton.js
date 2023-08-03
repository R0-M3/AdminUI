import React from 'react'

function ChangeButton({ type, changePage, disabled }) {
  return (
    <button className={`rounded-full w-12 h-12 mx-1 text-3xl pb-2  bg-sky-500 text-white disabled:bg-sky-800 disabled:opacity-30 ${disabled ? '' : ' btn-new'} `} disabled={disabled} title={type} value={type} onClick={(e) => changePage(e.target.value)}>{type}</button>
  )
}

export default ChangeButton