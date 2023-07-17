import React from 'react'
import Rows from './Rows'

function Table({ users , removeUsers}) {

    function selectAllCheckboxes(isCheck){
        const rows = document.querySelectorAll('.checkBox')
        rows.forEach(row => row.checked = isCheck)
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>
                        <input type='checkbox' id='selectAll' onChange={e => selectAllCheckboxes(e.target.checked)}/>
                        Select All
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