import React from 'react'

function Search({search , setSearch}) {
  return ( 
    <input type="text" placeholder="Search by name, email or role" className='search' id='searchBox' value={search} onChange={e => setSearch(e.target.value)}/>
  )
}

export default Search