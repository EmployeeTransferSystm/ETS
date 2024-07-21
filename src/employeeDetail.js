import React, { useEffect, useState } from "react";
import axios from "axios";
import "./employeeForm.css";

const EmployeeDetails = () => {
  const [activeTab, setActiveTab] = useState("insert");
  const [employee, setEmployee] = useState({
    id: "",
    name: "",
    address: "",
    gender: "",
    birth: "",
    civil_status: "",
    branch_id: "",
    position: "",
    start_date: "",
    grade: "",
    category_id: "",
    appointment_date: "",
  });
  const [category, setCategory] = useState([]);
  const [branch, setBranch] = useState([]);
  const [newemployee, newsetEmployee] = useState([]);
  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:3005/auth/category"),
      axios.get("http://localhost:3005/auth/branch"),
      axios.get("http://localhost:3005/auth/employee"),
    ])
      .then(([categoryResult, branchResult, employeeResult]) => {
        if (categoryResult.data.Status) {
          setCategory(categoryResult.data.Result);
        } else {
          alert(categoryResult.data.Error);
        }

        if (branchResult.data.Status) {
          setBranch(branchResult.data.Result);
        } else {
          alert(branchResult.data.Error);
        }

        if (employeeResult.data.Status) {
          newsetEmployee(employeeResult.data.Result);
          setEmployee(employeeResult.data.Result);
          
        } else {
          alert(employeeResult.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const renderTableRows = () => {
    return newemployee.map((data, index) => (
      <tr key={index}>
        <td>{data.name}</td>
        <td>{data.address}</td>
        <td>{data.gender}</td>
        <td>{new Date(data.birth).toLocaleDateString()}</td>
        <td>{data.civil_status}</td>
        <td>{data.branch_id}</td>
        <td>{data.position}</td>
        <td>{new Date(data.start_date).toLocaleDateString()}</td>
        <td>{data.grade}</td>
        <td>{data.category_id}</td>
        <td>{new Date(data.appointment_date).toLocaleDateString()}</td>
      </tr>
    ));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("id", employee.id);
    formData.append("name", employee.name);
    formData.append("address", employee.address);
    formData.append("gender", employee.gender);
    formData.append("birth", employee.birth);
    formData.append("civil_status", employee.civil_status);
    formData.append("branch_id", employee.branch_id);
    formData.append("position", employee.position);
    formData.append("start_date", employee.start_date);
    formData.append("grade", employee.grade);
    formData.append("category_id", employee.category_id);
    formData.append("appointment_date", employee.appointment_date);
  
    axios.post("http://localhost:3005/auth/add_employee", formData)
      .then((result) => {
        if (result.data.Status) {
          alert("Insert successful");
          // Refetch employee data
          axios.get("http://localhost:3005/auth/employee")
            .then((employeeResult) => {
              if (employeeResult.data.Status) {
                newsetEmployee(employeeResult.data.Result);
              } else {
                alert(employeeResult.data.Error);
              }
            })
            .catch((err) => console.log(err));
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  };
  

  const renderForm = () => {
    return (
      <form className="row g-1" onSubmit={handleSubmit}>
        <div className="form-container">
          <p className="heading3">Enter Employee Details</p>
          <div className="form-group">
            <label htmlFor="employeeNo">Employee No:</label>
            <input
              type="text"
              id="employeeNo"
              onChange={(e) => setEmployee({ ...employee, id: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="employeeName">Employee Name:</label>
            <input
              type="text"
              id="employeeName"
              onChange={(e) => setEmployee({ ...employee, name: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              onChange={(e) => setEmployee({ ...employee, address: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="gender">Gender:</label>
            <select
              id="gender"
              onChange={(e) => setEmployee({ ...employee, gender: e.target.value })}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="birthDate">Date of Birth:</label>
            <input
              type="text"
              id="birthDate"
              onChange={(e) => setEmployee({ ...employee, birth: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="civilStatus">Civil Status:</label>
            <input
              type="text"
              id="civilStatus"
              onChange={(e) => setEmployee({ ...employee, civil_status: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="presentBranch">Present Branch:</label>
            <select
              id="presentBranch"
              onChange={(e) => setEmployee({ ...employee, branch_id: e.target.value })}
            >
              <option value="">Select Branch</option>
              {branch.map((b) => (
                <option key={b.id} value={b.id}>{b.branch_name}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="position">Position:</label>
            <input
              type="text"
              id="position"
              onChange={(e) => setEmployee({ ...employee, position: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="currentStartDate">Current Start Date:</label>
            <input
              type="text"
              id="currentStartDate"
              onChange={(e) => setEmployee({ ...employee, start_date: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="grade">Grade:</label>
            <input
              type="text"
              id="grade"
              onChange={(e) => setEmployee({ ...employee, grade: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category:</label>
            <select
              name="category"
              id="category"
              className="form-select"
              onChange={(e) => setEmployee({ ...employee, category_id: e.target.value })}
            >
              <option value="">Select Category</option>
              {category.map((c) => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="appointmentDate">Appointment Date:</label>
            <input
              type="text"
              id="appointmentDate"
              onChange={(e) => setEmployee({ ...employee, appointment_date: e.target.value })}
            />
          </div>

          <div className="button-group">
            <button className="submit-button" type="submit">Submit</button>
            <button className="reset-button" type="button" onClick={() => setEmployee({
              id: "",
              name: "",
              address: "",
              gender: "",
              birth: "",
              civil_status: "",
              branch_id: "",
              position: "",
              start_date: "",
              grade: "",
              category_id: "",
              appointment_date: "",
            })}>Reset</button>
          </div>
        </div>
      </form>
    );
  };

  return (
    <div className="employee-details-container">
      <div className="button-group">
        <button onClick={() => setActiveTab("insert")}>Insert Information</button>
        <button onClick={() => setActiveTab("update")}>Update Information</button>
        <button onClick={() => setActiveTab("view")}>View Information</button>
      </div>
      {activeTab === "insert" && renderForm()}
      {activeTab === "update" && <div>Update Information form goes here</div>}
      {activeTab === "view" && (
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
            <tbody>{renderTableRows()}</tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default EmployeeDetails;