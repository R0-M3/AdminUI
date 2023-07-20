import React from 'react'

function TData({ data, types, edit, userData, updateUserData }) {
  return (
    <td className='border border-slate-400'>
      <input types='text' onChange={(e) => updateUserData(e.target)} autoComplete='false' disabled={edit} autoFocus={types === "name" && edit ? true: false} name={types} className='p-2 border-2 border-stone-600 disabled:bg-inherit'
        value={types === "name" ? userData.name : types === "email" ? userData.email : types === "role" ? userData.role : null}
        style={edit ? { "border": '0px' } : null}
        
      />
    </td>
  )
}

export default TData