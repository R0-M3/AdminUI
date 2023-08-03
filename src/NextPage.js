import React from 'react'
import ChangeButton from './ChangeButton';

function NextPage({ noOfButtons, setPageNo, removeUsers, changePage, pageNo }) {

  function paginationButtons() {
    const buttons = []
    for (let i = 1; i <= noOfButtons; i++) {
      buttons.push(<button
        className={`rounded-full w-12 h-12 mx-1 ${pageNo === i
          ? 'bg-white text-sky-500 border-2 border-sky-500'
          : 'text-white bg-sky-500'
          } transition ease-in-out hover:bg-white hover:text-sky-500 hover:translate-x-px hover:translate-y-px active:scale-90`}
        key={i}
        value={i}
        onClick={(e) => changePage(Number(e.target.value))}
      >
        {i}
      </button>)
    }
    return buttons;
  }

  function getAllSelectedUsers() {
    const rows = document.querySelectorAll('.checkBox')
    document.getElementById('selectAll').checked = false
    return Object.entries(rows).filter(([key, value]) => value.checked).map(([key, value]) => value.value)

  }

  return (
    <>
      {noOfButtons < 1 ? <></>
        :
        <>
          <section className='absolute z-10 bottom-0 w-full bg-blue-200 flex flex-grow justify-center items-center p-2'>
            <button className='mr-auto bg-red-500 text-white text-lg p-3 rounded-3xl transition ease-in-out hover:translate-x-px hover:translate-y-px hover:bg-white hover:text-red-500 active:scale-90' name='deleteSelected' onClick={e => removeUsers(getAllSelectedUsers())}>Delete Selected</button>
            <div className='mr-auto'>
              {noOfButtons > 1 ?
                <>
                  <ChangeButton type="&laquo;" disabled={(pageNo - 2) < 1 ? true : false} changePage={changePage} />
                  <ChangeButton type="&#8249;" disabled={(pageNo - 1) < 1 ? true : false} changePage={changePage} />

                  {paginationButtons()}

                  <ChangeButton type="&#8250;" disabled={(pageNo + 1) > 5 ? true : false} changePage={changePage} />
                  <ChangeButton type="&raquo;" disabled={(pageNo + 2 ) > 5 ? true : false} changePage={changePage} />
                </>
                : <></>}
            </div>
          </section>
        </>
      }
    </>
  )
}

export default NextPage