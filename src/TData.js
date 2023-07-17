import React from 'react'

function TData({ data, types, edit, userData, updateUserData }) {
  return (
    <td>
      <input types='text' onChange={(e) => updateUserData(e.target)} autoComplete='false' disabled={edit} autoFocus={types === "name" && edit ? true: false} name={types} className='inputText'
        value={types === "name" ? userData.name : types === "email" ? userData.email : types === "role" ? userData.role : null}
        style={edit ? { "border": '0px' } : null}
        
      />
    </td>
  )
}

export default TData