import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';
export const Navbar = () => {
  return (
    <div>
      <div>
         <Link to="/">Home</Link> &nbsp; &nbsp;
         <Link to="/register">Register</Link>&nbsp; &nbsp;
         <Link to="/login">Login</Link>&nbsp; &nbsp;
         <Link to="/employee">Employees</Link>&nbsp; &nbsp;
       
        
     </div>
    </div>
  )
}

export default Navbar