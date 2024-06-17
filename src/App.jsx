import { useEffect, useState } from 'react'
import  axios  from 'axios'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { UserList } from './userList';
import { UserContext } from './Context';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    axios
    .get("http://localhost:3004/users")
    .then(
      res => {
        setUsers(res.data);
      })
  }, [])

  const salaryUp = id => {
    setUsers(users.map(elm=>
      elm.id != id ? elm :  {...elm, salary: elm.salary+50000}
    ));
  }
  
  const salaryDown = id => {
    setUsers(users.map(elm=>
      elm.id != id ? elm :  {...elm, salary: Math.max(elm.salary -50000, 50000)}
    ));
  }
  
  const removeUser = id => {
    setUsers(users.filter(elm=>
      elm.id != id
    ));
  }



  return (
    <UserContext.Provider value={{
      items: users,
      onSalaryUp: salaryUp,
      onSalaryDown: salaryDown,
      onRemove: removeUser
    }}> 
      <UserList/>
    </UserContext.Provider>
  )
}

export default App
