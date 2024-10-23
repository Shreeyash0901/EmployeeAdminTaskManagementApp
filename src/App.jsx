import { useContext, useEffect, useState } from 'react';
import './App.css';
import Login from './components/Auth/Login';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import { AuthContext } from './context/AuthProvider';

function App() {
  const [user, setUser] = useState(null);

  // Get auth data from context
  const authData = useContext(AuthContext);

  useEffect(() => {
    if(authData){
      const loggedInUser = localStorage.getItem("loggedInUser")
    if(loggedInUser){
      setUser(loggedInUser.role)
      
    }
    }
  }, [authData])
  
  
  const handleLogin = (email, password) => {
    if (email === 'admin@me.com' && password === '123') {
      setUser('admin'); // Admin login
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    } else if (authData && authData.employees.find((e) => email === e.email && e.password === password)) {
      setUser('employee'); // Employee login
      localStorage.setItem('loggedInUser',JSON.stringify({role:'employee'}))
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === 'admin' ? (
        <AdminDashboard />
      ) : user === 'employee' ? (
        <EmployeeDashboard />
      ) : null}
    </div>
  );
}

export default App;
