import React from 'react'

function NextPage({ noOfButtons, setPageNo, removeUsers, changePage , pageNo }) {

  function paginationButtons() {
    const buttons = []
    for (let i = 1; i <= noOfButtons; i++) {
      buttons.push(<button className='paginatingButton' key={i} value={i} onClick={(e) => setPageNo(e.target.value)} autoFocus={pageNo === i ? true : false} >{i}</button>)
    }
    return buttons;
  }

  function getAllSelectedUsers() {
    const rows = document.querySelectorAll('.checkBox')
    document.getElementById('selectAll').checked = false
    return Object.entries(rows).filter(([key, value]) => value.checked).map(([key, value]) => value.value)

  }

  return (
    <section className='nextpage'>

      <button className='deleteSelected' onClick={e => removeUsers(getAllSelectedUsers())}>Delete Selected</button>
      <div className='buttonDiv'>
        <button onClick={(e) => changePage("<<")}>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M11 7l-5 5l5 5" />
            <path d="M17 7l-5 5l5 5" />
          </svg>
        </button>
        <button onClick={(e) => changePage("<")}>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon " width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M15 6l-6 6l6 6" />
          </svg>
        </button>
        {paginationButtons()}
        <button onClick={(e) => changePage(">")}>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 6l6 6l-6 6" />
          </svg>
        </button>
        <button onClick={(e) => changePage(">>")}>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M7 7l5 5l-5 5" />
            <path d="M13 7l5 5l-5 5" />
          </svg>
        </button>
      </div>
    </section>
  )
}

export default NextPage