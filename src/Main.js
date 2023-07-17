import Table from './Table'

function Main({users, removeUsers}) {
    return (
        <main>
            <Table users={users} removeUsers={removeUsers}/>
        </main>

    )
}

export default Main