import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { UserList } from './userList';
import { UserContext } from './Context';

function App() {
  const [users, setUsers] = useState([
    {
      id: 101,
      name: "Tiko",
      salary: 300000
    },{
      id: 102,
      name: "Ani",
      salary: 400000
    },{
      id: 103,
      name: "Sevak",
      salary: 500000
    },{
      id: 104,
      name: "Narek",
      salary: 500000
    },{
      id: 105,
      name: "Armen",
      salary: 10000000
    },{
      id: 106,
      name: "Anna",
      salary: 700000
    },
  ]);

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
