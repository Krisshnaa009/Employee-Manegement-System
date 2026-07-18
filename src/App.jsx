import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInEmployeeId, setLoggedInEmployeeId] = useState(null)
  const [userData,SetUserData] = useContext(AuthContext)

  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')
    
    if(loggedInUser){
      const parsedUser = JSON.parse(loggedInUser)
      setUser(parsedUser.role)
      if (parsedUser.role === 'employee' && parsedUser.data) {
        setLoggedInEmployeeId(parsedUser.data.id)
      }
    }

  },[])


  const handleLogin = (email, password) => {
    if (email == 'admin@me.com' && password == '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
    } else if (userData) {
      const employee = userData.find((e) => email == e.email && e.password == password)
      if (employee) {
        setUser('employee')
        setLoggedInEmployeeId(employee.id)
        // Only persist the id - the full employee record is always looked up
        // live from context so task updates are reflected immediately.
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: { id: employee.id } }))
      } else {
        alert("Invalid Credentials")
      }
    }
    else {
      alert("Invalid Credentials")
    }
  }

  // Always pull the freshest copy of the logged-in employee's data from
  // context, so buttons clicked on the employee dashboard are instantly
  // reflected here (and in the admin dashboard, which shares the same context).
  const currentEmployeeData = (user === 'employee' && userData)
    ? userData.find((e) => e.id === loggedInEmployeeId)
    : null

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard changeUser={setUser} /> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={currentEmployeeData} /> : null) }
    </>
  )
}

export default App