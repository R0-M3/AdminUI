import React from 'react'
import Rows from './Rows'

function Table({ users , removeUsers}) {

    function selectAllCheckboxes(isCheck){
        const rows = document.querySelectorAll('.checkBox')
        rows.forEach(row => row.checked = isCheck)
    }

    return (
        <table className='w-full h-max table table-fixed text-center border-separate border border-slate-400'>
            <thead>
                <tr>
                    <th className='border border-slate-400'>
                        <input className='w-5 h-5 m-1' title='Select All' type='checkbox' id='selectAll' onChange={e => selectAllCheckboxes(e.target.checked)}/>
                    </th>
                    <th className='border border-slate-400'>
                        Name
                    </th>
                    <th className='border border-slate-400'>
                        Email
                    </th>
                    <th className='border border-slate-400'>
                        Role
                    </th>
                    <th className='border border-slate-400'>
                        Actions
                    </th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (<Rows key={user.id} user={user} removeUsers={removeUsers} />))}
            </tbody>
        </table>
    )
}

export default Table