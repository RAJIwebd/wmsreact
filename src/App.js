import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Employeedetails from './pages/EmployeeDetails'
import Attendance from './pages/Attendance';
import Shiftscheduling from './pages/Shiftscheduling';

import Costmanagement from './pages/Costmanagement';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Employeedetails" element={<Employeedetails />} />
            <Route path="/Attendance" element={<Attendance />} />
            <Route path="/Shiftscheduling" element={<Shiftscheduling />} />
            <Route path="/Communication" render={() => (
                  <iframe
    src="http://localhost:5173/"  // Assuming your communication app runs on this port
    title="Communication App"
    style={{
      width: '100%',
     
    }}
  />
)} />

            
            <Route path="/Costmanagement" element={<Costmanagement />} />
          </Routes>
          3
        </div>
      </div>
    </Router>
  );
}

export default App;
