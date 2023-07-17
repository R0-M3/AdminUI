import React from 'react'

function Check({id}) {
  return (
    <>
        <input type='checkbox' className="checkBox" value={id}/>
    </>
  )
}

export default Check