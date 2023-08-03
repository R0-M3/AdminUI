
import { useEffect, useState } from 'react';
import Header from './Header';
import Search from './Search'
import Main from './Main';
import NextPage from './NextPage';


function App() {

  const URL = "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"

  //useStates
  const [users, setUsers] = useState([])
  const [err, setErr] = useState("")
  const [pageNo, setPageNo] = useState(1)
  const [search, setSearch] = useState("")

  //Fetching data using useEffect Hook
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(URL)
        if (!res.ok) throw new Error("Could not fetch data")
        const listUsers = await res.json()
        setUsers(listUsers)
        console.log(typeof (listUsers));
        setErr(null)
      }
      catch (errs) {
        setErr(errs.message)
      }
    }
    fetchUsers()
  }, [])

  //Pagination Variables
  const totalUsersPerPage = 10
  const lastIndex = pageNo * totalUsersPerPage
  const firstIndex = lastIndex - totalUsersPerPage


  function removeUsers(selectedUsers) {
    setUsers(() => (users.filter((user) => (!selectedUsers.includes(user.id)))))
  }

  function changePage(typeOfButton) {
    setPageNo((prevPageNo) => {
      switch (typeOfButton) {
        case "«": return prevPageNo - 2
        case "‹": return prevPageNo - 1
        case "›": return prevPageNo + 1
        case "»": return prevPageNo + 2
        default: return typeOfButton
      }
    })
  }

  return (
    <div className="w-full h-full flex flex-col text-xl">
      <Header />
      {!err ?
        <>
          <Search setPageNo={setPageNo} search={search} setSearch={setSearch} />
          <Main users={users.filter((user) => user.name.toLowerCase().includes(search.toLowerCase()) || user.email.toLowerCase().includes(search.toLowerCase()) || user.role.toLowerCase().includes(search.toLowerCase())).slice(firstIndex, lastIndex)} removeUsers={removeUsers} />
          <NextPage noOfButtons={Math.ceil(users.filter((user) => user.name.toLowerCase().includes(search.toLowerCase()) || user.email.toLowerCase().includes(search.toLowerCase()) || user.role.toLowerCase().includes(search.toLowerCase())).length / totalUsersPerPage)} pageNo={pageNo} setPageNo={setPageNo} removeUsers={removeUsers} changePage={changePage} />
        </> : <main className='self-center mt-16 p-5 text-5xl text-center text-red-600'>{err}</main>}
    </div>
  );
}

export default App;
