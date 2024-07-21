import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './employeeBranch.css';

const EmployeeBranch = () => {
  const [activeTab, setActiveTab] = useState('insert');
  const [nameSearch, setNameSearch] = useState('');
  const [employees, setEmployees] = useState([]);
  const [employeeNumbers, setEmployeeNumbers] = useState([]);
  const [branches, setBranches] = useState([]);
  const [selectedEmployeeNumber, setSelectedEmployeeNumber] = useState('');
  const [selectedBranch, setSelectedBranch] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3005/auth/employee_numbers')
      .then(response => setEmployeeNumbers(response.data.Result))
      .catch(error => console.error('Error fetching employee numbers', error));

    axios.get('http://localhost:3005/auth/branches')
      .then(response => setBranches(response.data.Result))
      .catch(error => console.error('Error fetching branches', error));
  }, []);

  const handleSearchByName = (e) => {
    e.preventDefault();
    axios.get(`http://localhost:3005/auth/search_employee_by_name`, {
      params: { name: nameSearch }
    })
    .then(response => {
      if (response.data.Status) {
        setEmployees(response.data.Result);
      } else {
        alert(response.data.Error);
      }
    })
    .catch(error => console.error('Error fetching data: ', error));
  };

  const handleSubmit = () => {
    const params = {
      employeeNumber: selectedEmployeeNumber,
      branch: selectedBranch
    };
    axios.get(`http://localhost:3005/auth/search_employee_details`, { params })
      .then(response => {
        if (response.data.Status) {
          setEmployees(response.data.Result);
        } else {
          alert(response.data.Error);
        }
      })
      .catch(error => console.error('Error fetching employee details', error));
  };

  const renderTableRows = () => {
    return employees.map((employee, index) => (
      <tr key={index}>
        <td>{employee.name}</td>
        <td>{employee.address}</td>
        <td>{employee.gender}</td>
        <td>{employee.birth}</td>
        <td>{employee.civil_status}</td>
        <td>{employee.branch_id}</td>
        <td>{employee.position}</td>
        <td>{employee.start_date}</td>
        <td>{employee.grade}</td>
        <td>{employee.category_id}</td>
        <td>{employee.appointment_date}</td>
      </tr>
    ));
  };

  const renderForm = () => {
  return (
    <>
      <div className="form-container">
        <table className="employee-table">
          <thead>
            <tr>
              <th colSpan="3">Search</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>By Name (or person)</td>
              <td>
                <input 
                  type="text" 
                  value={nameSearch} 
                  onChange={(e) => setNameSearch(e.target.value)} 
                />
              </td>
              <td>
                <button className="submit-button" onClick={handleSearchByName}>Submit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="form-container">
        <table className="employee-table smaller-table">
          <thead>
            <tr>
              <th colSpan="2">Search Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Employee No:</th>
              <td>
                <select 
                  value={selectedEmployeeNumber} 
                  onChange={e => setSelectedEmployeeNumber(e.target.value)}
                >
                  <option value="">Select an option</option>
                  {employeeNumbers.map(emp => (
                    <option key={emp.id} value={emp.id}>{emp.id}</option>
                  ))}
                </select>
              </td>
            </tr>
            <tr>
              <th>Present Branch:</th>
              <td>
                <select 
                  value={selectedBranch} 
                  onChange={e => setSelectedBranch(e.target.value)}
                >
                  <option value="">Select an option</option>
                  {branches.map(branch => (
                    <option key={branch.branch_name} value={branch.branch_name}>{branch.branch_name}</option>
                  ))}
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="button-group">
        <button className="submit-button" onClick={handleSubmit}>Submit</button>
        <button className="reset-button" onClick={() => setEmployees([])}>Reset</button>
      </div>
      {employees.length > 0 && (
        <div>
          <table className="employee-table smaller-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Gender</th>
                <th>Birth</th>
                <th>Civil Status</th>
                <th>Branch ID</th>
                <th>Position</th>
                <th>Start Date</th>
                <th>Grade</th>
                <th>Category ID</th>
                <th>Appointment Date</th>
              </tr>
            </thead>
            <tbody>
              {renderTableRows()}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

  return (
    <div className="employee-details-container">
      <div className="button-group">
        <button onClick={() => setActiveTab('insert')}>Insert Information</button>
        <button onClick={() => setActiveTab('update')}>Update Information</button>
        <button onClick={() => setActiveTab('view')}>View Information</button>
        <button onClick={() => setActiveTab('search')}>Search Employee</button>
      </div>
      {activeTab === 'insert' && renderForm()}
      {activeTab === 'update' && <div>Update Information form goes here</div>}
      {activeTab === 'view' && <div>View Information form goes here</div>}
      {activeTab === 'search' && renderForm()}
    </div>
  );
};

export default EmployeeBranch;