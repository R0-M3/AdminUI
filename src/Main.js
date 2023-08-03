import Table from './Table'

function Main({users, removeUsers}) {
    return (
        <main>
            {users.length ? 
            <Table users={users} removeUsers={removeUsers}/>
            :<p className='mt-16 p-5 text-5xl text-center'>No Matching Data</p>}
        </main>

    )
}

export default Main