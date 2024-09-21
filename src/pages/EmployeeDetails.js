import React, { useEffect, useState } from 'react';
import './EmployeeDetails.css';

const EmployeeDetails = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  // Fetch employees when the component mounts
  useEffect(() => {
    // Fetch data from the Express backend
    fetch('http://localhost:3000/api/employees')
      .then((response) => response.json())
      .then((data) => {
        setEmployees(data); // Set the fetched data in state
      })
      .catch((error) => console.error('Error fetching employees:', error));
  }, []);

  // Handle the click event to show employee details
  const showEmployeeDetails = (employee) => {
    setSelectedEmployee(employee);
  };

  return (
    <div className='overall'>
      <div className="main-content">
        {/* Employee List */}
        <div className="employee-list">
          <h2>Employee List</h2>
          <ul id="employeeList">
            {employees.map((employee) => (
              <li
                key={employee.worker_id}
                onClick={() => showEmployeeDetails(employee)}
                style={{ cursor: 'pointer' }}
              >
                {employee.first_name} {employee.last_name}
              </li>
            ))}
          </ul>
        </div>
       
        

        {/* Employee Details */}
        <div className="employee-details" id="employeeDetails">
        <div className='photo'>
            <img src='./avatar.png' alt=''></img>
          </div>
          {selectedEmployee ? (
            <>
              <h2>
                {selectedEmployee.first_name} {selectedEmployee.last_name}
              </h2>
              <p>
                <strong>Position:</strong> {selectedEmployee.position}
              </p>
              <p>
                <strong>Shift:</strong> {selectedEmployee.shift}
              </p>
              <p>
                <strong>Hire Date:</strong> {new Date(selectedEmployee.hire_date).toDateString()}
              </p>
              <p>
                <strong>Salary:</strong> ${selectedEmployee.salary}
              </p>
              <p>
                <strong>Phone:</strong> {selectedEmployee.phone_number}
              </p>
              <p>
                <strong>Email:</strong> {selectedEmployee.email}
              </p>
              <p>
                <strong>Line Number:</strong> {selectedEmployee.line_number}
              </p>
            </>
          ) : (
            <p>Select an employee to see the details</p>
          )}
         
        </div>
      </div>
      </div>
      
  );
};

export default EmployeeDetails;
