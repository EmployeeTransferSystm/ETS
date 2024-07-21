import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './searchEmployeeDetails.css';

const SearchEmployeeDetails = () => {
  const [activeTab, setActiveTab] = useState('search');
  const [experienceGreaterThan, setExperienceGreaterThan] = useState('');
  const [experienceLessThan, setExperienceLessThan] = useState('');
  const [nameSearch, setNameSearch] = useState('');
  const [numberSearch, setNumberSearch] = useState('');
  const [categorySearch, setCategorySearch] = useState('');
  const [categories, setCategories] = useState([]);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3005/auth/category`)
      .then(response => {
        setCategories(response.data.Result);
      })
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  const handleSubmitExperienceGreaterThan = (e) => {
    e.preventDefault();
    axios.get(`http://localhost:3005/auth/search_employee_by_experience_greater`, {
      params: { experience: experienceGreaterThan }
    })
    .then((response) => {
      setEmployees(response.data.Result);
    })
    .catch((error) => {
      console.error('Error fetching data: ', error);
    });
  };

  const handleSubmitExperienceLessThan = (e) => {
    e.preventDefault();
    axios.get(`http://localhost:3005/auth/search_employee_by_experience_less`, {
      params: { experience: experienceLessThan }
    })
    .then((response) => {
      setEmployees(response.data.Result);
    })
    .catch((error) => {
      console.error('Error fetching data: ', error);
    });
  };

  const handleSubmitByName = (e) => {
    e.preventDefault();
    axios.get(`http://localhost:3005/auth/search_employee_by_name`, {
      params: { name: nameSearch }
    })
    .then((response) => {
      setEmployees(response.data.Result);
    })
    .catch((error) => {
      console.error('Error fetching data: ', error);
    });
  };

  const handleSubmitByNo = (e) => {
    e.preventDefault();
    axios.get(`http://localhost:3005/auth/search_employee_by_no`, {
      params: { employeeNo: numberSearch }
    })
    .then((response) => {
      setEmployees(response.data.Result);
    })
    .catch((error) => {
      console.error('Error fetching data: ', error);
    });
  };

  const handleSubmitByCategory = (e) => {
    e.preventDefault();
    axios.get(`http://localhost:3005/auth/search_employee_by_category`, {
      params: { category: categorySearch }
    })
    .then((response) => {
      setEmployees(response.data.Result);
    })
    .catch((error) => {
      console.error('Error fetching data: ', error);
    });
  };

  const renderTableRows = () => {
    return employees.map((employee, index) => (
      <tr key={index}>
        <td>{employee.name}</td>
        <td>{employee.address}</td>
        <td>{employee.gender}</td>
        <td>{new Date(employee.birth).toLocaleDateString()}</td>
        <td>{employee.civil_status}</td>
        <td>{employee.branch_id}</td>
        <td>{employee.position}</td>
        <td>{new Date(employee.start_date).toLocaleDateString()}</td>
        <td>{employee.grade}</td>
        <td>{employee.category_id}</td>
        <td>{new Date(employee.appointment_date).toLocaleDateString()}</td>
      </tr>
    ));
  };

  const renderForm = () => {
    return (
      <div>
        <table className="outer-table">
          <tbody>
            <tr>
              <td>
                <table className="inner-table">
                  <caption>Search Employee By Experience of current branch</caption>
                  <tbody>
                    <tr>
                      <td>Experience Greater Than </td>
                      <td className='inputBox'>
                        <input type='number' value={experienceGreaterThan} onChange={(e) => setExperienceGreaterThan(e.target.value)} />
                        <button className="submit-button" onClick={handleSubmitExperienceGreaterThan}>Submit</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Experience Lower Than </td>
                      <td>
                        <input type='number' value={experienceLessThan} onChange={(e) => setExperienceLessThan(e.target.value)} />
                        <button className="submit-button" onClick={handleSubmitExperienceLessThan}>Submit</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td>
                <table className="inner-table">
                  <caption>Search Employee By Service Experience</caption>
                  <tbody>
                    <tr>
                      <td>Experience Greater Than </td>
                      <td className='inputBox'>
                        <input type='text'/>
                        <button className="submit-button">Submit</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Experience Lower Than </td>
                      <td>
                        <input type='text' />
                        <button className="submit-button">Submit</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              </tr>
              <tr>
              <td>
                <table className="inner-table">
                  <caption>Search Employee By Name Pattern</caption>
                  <tbody>
                    <tr>
                      <td>By Name: </td>
                      <td>
                        <input type='text' value={nameSearch} onChange={(e) => setNameSearch(e.target.value)} />
                        <button className="submit-button" onClick={handleSubmitByName}>Submit</button>
                      </td>
                    </tr>
                    <tr>
                      <td>By No: </td>
                      <td>
                        <input type='text' value={numberSearch} onChange={(e) => setNumberSearch(e.target.value)} />
                        <button className="submit-button" onClick={handleSubmitByNo}>Submit</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td>
                <table className="inner-table">
                  <caption>Search Employee By Job Category</caption>
                  <tbody>
                    <tr>
                      <td>By Category: </td>
                      <td className='jobCategoryInput'>
                        <select value={categorySearch} onChange={e => setCategorySearch(e.target.value)}>
                          <option value="">Select Job Category</option>
                          {categories.map(category => (
                            <option key={category.id} value={category.id}>{category.name}</option>
                          ))}
                        </select>
                      </td>
                      <td>
                        <button className="submit-button" onClick={handleSubmitByCategory}>Submit</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="employee-details-container">
      <div className="button-group">
        <button onClick={() => setActiveTab('insert')}>Insert Information</button>
        <button onClick={() => setActiveTab('update')}>Update Information</button>
        <button onClick={() => setActiveTab('search')}>Search Employee</button>
        <button onClick={() => setActiveTab('appeal')}>Appeal Option</button>
        <button onClick={() => setActiveTab('transferOption')}>Transfer Option</button>
        <button onClick={() => setActiveTab('view')}>View Information</button>
      </div>
      {activeTab === 'insert' && <div>Insert for Employee</div>}
      {activeTab === 'update' && <div>Update Information form goes here</div>}
      {activeTab === 'search' && (
        <>
          {renderForm()}
          <div>
            <table className="employee-table">
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
        </>
      )}
      {activeTab === 'appeal' && <div>Appeal Option</div>}
      {activeTab === 'transferOption' && <div>View transfer option form goes here</div>}
      {activeTab === 'view' && <div>View Information form goes here</div>}
    </div>
  );
};

export default SearchEmployeeDetails;