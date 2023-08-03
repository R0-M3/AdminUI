
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
  const [pageNo,setPageNo] = useState(1)
  const [search,setSearch] = useState("")

  //Fetching data using useEffect Hook
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(URL)
        if (!res.ok) throw new Error("Something went wrong")
        const listUsers = await res.json()
        setUsers(listUsers)
        console.log(typeof(listUsers));
        setErr("")
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


  function removeUsers(selectedUsers){
    setUsers(() => (users.filter((user) => (!selectedUsers.includes(user.id)))))
  }

  function changePage(typeOfButton){
    setPageNo((prevPageNo) => {
      switch(typeOfButton){
        case "«" : return prevPageNo - 2
          break
        case "‹" : return prevPageNo - 1
          break
        case "›" : return prevPageNo + 1
          break
        case "»" : return prevPageNo + 2
          break
        default : return typeOfButton
        }
    })
    console.log("Page Supposed To Change",typeOfButton);
  }
 
  return (
    <div className="w-full h-full flex flex-col text-xl">
      <Header />
      <Search setPageNo={setPageNo} search={search} setSearch={setSearch} />
      <Main users={users.filter((user) => user.name.toLowerCase().includes(search.toLowerCase()) || user.email.toLowerCase().includes(search.toLowerCase()) || user.role.toLowerCase().includes(search.toLowerCase())).slice(firstIndex,lastIndex)} removeUsers={removeUsers}/>
      <NextPage noOfButtons={Math.ceil(users.filter((user) => user.name.toLowerCase().includes(search.toLowerCase()) || user.email.toLowerCase().includes(search.toLowerCase()) || user.role.toLowerCase().includes(search.toLowerCase())).length/totalUsersPerPage)} pageNo={pageNo} setPageNo={setPageNo} removeUsers={removeUsers} changePage={changePage}/>
    </div>
  );
}

export default App;
