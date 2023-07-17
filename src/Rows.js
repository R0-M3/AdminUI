import { useState } from "react"
import Check from "./Check"
import Delete from "./Delete"
import Edit from "./Edit"
import TData from "./TData"

function Rows({ user, removeUsers }) {
  const [edit,setEdit] = useState(true)
  const[userData,setUserData] = useState(user)

  function updateUserData(e){
    const {name,value} = e
    setUserData((prevUserData) => {
      return {
        ...prevUserData,
        [name]:value
      }
    })
  }

  return (
    <tr>
      <td>
        <Check value={user.id} id={user.id}/>
      </td>
      {Object.entries(user).filter(([key]) => (key !== "id")).map(([key, value]) => (<TData key={key} types={key} data={value} edit={edit} updateUserData={updateUserData} userData={userData}/>))}
      <td>
        <Edit value={user.id} edit={edit} setEdit={setEdit}/>
        <Delete value={user.id} removeUsers={removeUsers} />
      </td>
    </tr>
  )
}

export default Rows