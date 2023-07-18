import React from 'react'

function Search({search , setSearch}) {
  return ( 
    <input type="text" className='border border-cyan-500 p-1' placeholder="Search by name, email or role" id='searchBox' value={search} onChange={e => setSearch(e.target.value)}/>
  )
}

export default Search