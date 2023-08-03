import React from 'react'

function Search({ search, setSearch, setPageNo }) {
  return (
    <input type="text" className='border border-cyan-500 p-1' placeholder="Search by name, email or role" id='searchBox' value={search} 
    onChange={e => {
    setPageNo(1) 
    setSearch(e.target.value)}
    } />
  )
}

export default Search