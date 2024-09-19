// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
      <div className='container'>
       <div className="navbar">
         <div className='profile'>
           <div className='avatar'></div>
            <h2>Manager:RAJI</h2>
           
          </div>
         <nav className='navlist'>
        <ul >
          <li><Link to="/Dashboard">Dashboard</Link></li>
          <li><Link to="/employeedetails">Employee Details</Link></li>
          <li><Link to="/attendance">Attendance</Link></li>
          <li><Link to="/shiftscheduling">Shift Scheduling</Link></li>
          <li><Link to="/communication">Communication</Link></li>
          <li><Link to="/costmanagement">Cost Management</Link></li>
        </ul>
        </nav> 
       </div>
      </div>
    );
}

export default Navbar;
