import React from 'react'
import ChangeButton from './ChangeButton';

function NextPage({ noOfButtons, setPageNo, removeUsers, changePage, pageNo }) {

  function paginationButtons() {
    const buttons = []
    for (let i = 1; i <= noOfButtons; i++) {
      buttons.push(<button className='rounded-full w-12 h-12 mx-1 btn-new focus:border-2 focus:border-sky-500 focus:bg-white focus:text-sky-500' key={i} value={i} onClick={(e) => setPageNo(e.target.value)} autoFocus={pageNo === i ? true : false} >{i}</button>)
    }
    return buttons;
  }

  function getAllSelectedUsers() {
    const rows = document.querySelectorAll('.checkBox')
    document.getElementById('selectAll').checked = false
    return Object.entries(rows).filter(([key, value]) => value.checked).map(([key, value]) => value.value)

  }

  return (
    <section className='absolute z-10 bottom-0 w-full bg-blue-200 flex flex-grow justify-center items-center p-2'>
      <button className='mr-auto bg-red-500 text-white text-lg p-3 rounded-3xl transition ease-in-out hover:translate-x-px hover:translate-y-px hover:bg-white hover:text-red-500 active:scale-90' name='deleteSelected' onClick={e => removeUsers(getAllSelectedUsers())}>Delete Selected</button>
      <div className='mr-auto'>
        <ChangeButton type="&laquo;" changePage={changePage} />
        <ChangeButton type="&#8249;" changePage={changePage} />
        {paginationButtons()}
        <ChangeButton type="&#8250;" changePage={changePage} />
        <ChangeButton type="&raquo;" changePage={changePage} />
      </div>
    </section>
  )
}

export default NextPage