import React from 'react'
import Rows from './Rows'

function Table({ users , removeUsers}) {

    function selectAllCheckboxes(isCheck){
        const rows = document.querySelectorAll('.checkBox')
        rows.forEach(row => row.checked = isCheck)
    }

    return (
        <table className='w-full table table-fixed text-center'>
            <thead>
                <tr>
                    <th className='h-full'>
                        <input className='w-5 h-5 m-1' title='Select All' type='checkbox' id='selectAll' onChange={e => selectAllCheckboxes(e.target.checked)}/>
                    </th>
                    <th>
                        Name
                    </th>
                    <th>
                        Email
                    </th>
                    <th>
                        Role
                    </th>
                    <th>
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