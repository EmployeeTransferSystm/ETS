import React, { useEffect, useState } from "react";
import axios from "axios";
import './employeeForm.css';

const DependentDetail= () => {
    const [activeTab, setActiveTab] = useState('insert');

    const [dependent, setDependent] = useState({
      employee_id: "",
      id:"",
      name: "",
      gender: "",
      birth: "",
      relationship:"",
    });
    const [employee, setEmployee] = useState([]);
    useEffect(() => {
      Promise.all([
        axios.get("http://localhost:3005/auth/dependent"),
        axios.get("http://localhost:3005/auth/employee"),
      ])
        .then(([dependentResult, employeeResult]) => {
          if (dependentResult.data.Status) {
            setDependent(dependentResult.data.Result);
          } else {
            alert(dependentResult.data.Error);
          }
          if (employeeResult.data.Status) {
            setEmployee(employeeResult.data.Result);
          } else {
            alert(employeeResult.data.Error);
          }
        })
        .catch((err) => console.log(err));
    }, []);

    const renderTableRows = () => {
      return dependent.map((data, index) => (
        <tr key={index}>
          <td>{data.employee_id}</td>
          <td>{data.name}</td>
          <td>{data.gender}</td>
          <td>{data.birth}</td>
          <td>{data.relationship}</td>
        </tr>
      ));
    };
    const handleSubmit = (e) => {
      e.preventDefault()
      const formData = new FormData();
      formData.append('employee_id', dependent.employee_id);
      formData.append('name', dependent.name);
      formData.append('gender', dependent.gender);
      formData.append('birth', dependent.birth);
      formData.append('relationship', dependent.relationship);
  
      axios.post('http://localhost:3005/auth/add_dependent', formData)
      .then(result => {
          if(result.data.Status) {
              alert("Insert successful");
          } else {
              alert(result.data.Error)
          }
      })
      .catch(err => console.log(err))
    }

    const renderForm = () => {
        return (
          <form className="row g-1" onSubmit={handleSubmit}>
            <div className="form-container">
              <p className="heading3"> Enter Dependent Details</p>
            <div className="form-group">
              <label htmlFor="employeeNo">Employee No:</label>
              <select
              name="employeeNo"
              id="employeeNo"
              className="form-select"
              onChange={(e) => setDependent({ ...dependent, employee_id: e.target.value })}
            >
              <option value="">Select Employee ID</option>
              {employee.map((em) => (
                <option key={em.id} value={em.id}>{em.id}</option>
              ))}
            </select>
            </div>
            <div className="form-group">
              <label htmlFor="dependentNo">Dependent No:</label>
              <input type="text" id="dependentNo" onChange={(e) => setDependent({ ...dependent, id: e.target.value })}/>
            </div>
            <div className="form-group">
              <label htmlFor="name">Dependent Name:</label>
              <input type="text" id="name" onChange={(e) => setDependent({ ...dependent, name: e.target.value })}/>
            </div>
            <div className="form-group">
            <label htmlFor="gender">Gender:</label>
            <select
              id="gender"
              onChange={(e) => setDependent({ ...dependent, gender: e.target.value })}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
            <div className="form-group">
              <label htmlFor="birthDate">Date of Birth:</label>
              <input type="text" id="birthDate" onChange={(e) => setDependent({ ...dependent, birth: e.target.value })}/>
            </div>
            <div className="form-group">
              <label htmlFor="civilStatus">Relationship:</label>
              <input type="text" id="civilStatus" onChange={(e) => setDependent({ ...dependent, relationship: e.target.value })}/>
            </div>
            
            <div className="button-group">
              <button className="submit-button" type="submit">Submit</button>
              <button className="reset-button" type="button" onClick={() => setEmployee({
              employee_id: "",
              id:"",
              name: "",
              gender: "",
              birth: "",
              relationship:"",
            })}>Reset</button>
            </div>
         
          </div>
          </form>
        );
      };
    
      return (
        <div className="employee-details-container">
          <div className="button-group">
            <button onClick={() => setActiveTab('insert')}>Insert Information</button>
            <button onClick={() => setActiveTab('update')}>Update Information</button>
            <button onClick={() => setActiveTab('view')}>View Information</button>
          </div>
          {activeTab === 'insert' && renderForm()}
          {activeTab === 'update' && <div>Update Information form goes here</div>}
          {activeTab === 'view' && 
          <div>
          <table className="employee-table">
            <thead>
              <tr>
                <th>Employee_ID</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Birth</th>
                <th>Relationship</th>
              </tr>
            </thead>
            <tbody>{renderTableRows()}</tbody>
          </table>
        </div>
          }
        </div>
      );
    };
    
    export default DependentDetail;