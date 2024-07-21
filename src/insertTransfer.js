import React, { useEffect, useState } from "react";
import axios from "axios";
import './employeeForm.css';

const InsertTransfer = () => {
  const [activeTab, setActiveTab] = useState('insert');
  const [transferrequest, setTransferRequest] = useState({
    id: "",
    employee_id: "",
    description: "",
    request_date: "",
    title: "",
    type: "",
    transferposition: "",
    status: "",
    cycle_id: "",
    hr_decision: "",
    hr_comment: "",
  });
  const [employee, setEmployee] = useState([]);
  const [cycle, setCycle] = useState([]);

  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:3005/auth/transferrequest"),
      axios.get("http://localhost:3005/auth/employee"),
      axios.get("http://localhost:3005/auth/cycle"),
    ])
      .then(([cycleResult, employeeResult, tranreqResult]) => {
        if (cycleResult.data.Status) {
          setCycle(cycleResult.data.Result);
        } else {
          alert(cycleResult.data.Error);
        }
        if (tranreqResult.data.Status) {
          setCycle(tranreqResult.data.Result);
        } else {
          alert(tranreqResult.data.Error);
        }
        if (employeeResult.data.Status) {
          setEmployee(employeeResult.data.Result);
        } else {
          alert(employeeResult.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("id", transferrequest.id);
    formData.append("employee_id", transferrequest.employee_id);
    formData.append("description", transferrequest.description);
    formData.append("request_date", transferrequest.request_date);
    formData.append("title", transferrequest.title);
    formData.append("type", transferrequest.type);
    formData.append("transferposition", transferrequest.transferposition);
    formData.append("status", transferrequest.status);
    formData.append("cycle_id", transferrequest.cycle_id);
    formData.append("hr_decision", transferrequest.hr_decision);
    formData.append("hr_comment", transferrequest.hr_comment);

    axios.post("http://localhost:3005/auth/add_transfer_request", formData)
      .then((result) => {
        if (result.data.Status) {
          alert("Insert successful");
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  };

  const handleEmployeeChange = (e) => {
    const employeeId = e.target.value; // employeeId might be a string like "1"
    const selectedEmployee = employee.find(em => em.id === parseInt(employeeId)); // Convert employeeId to number
    if (selectedEmployee) {
      console.log(`Selected Employee Position: ${selectedEmployee.position}`);
    } else {
      alert(`No employee found with id: ${employeeId}`);
    }
  
    setTransferRequest({
      ...transferrequest,
      employee_id: employeeId,
      title: selectedEmployee ? selectedEmployee.position : ""
    });
  };

  const renderForm = () => {
    return (
      <form className="row g-1" onSubmit={handleSubmit}>
        <div className="form-container">
          <p className="heading3">Insert Transfer Request</p>
          <div className="form-group">
            <label htmlFor="requestID">Request ID:</label>
            <input type="text" id="requestID" onChange={(e) => setTransferRequest({ ...transferrequest, id: e.target.value })} />
          </div>
          <div className="form-group">
            <label htmlFor="employeeNo">Employee No:</label>
            <select
              name="employeeNo"
              id="employeeNo"
              className="form-select"
              onChange={handleEmployeeChange}
            >
              <option value="">Select Employee ID</option>
              {employee.map((em) => (
                <option key={em.id} value={em.id}>{em.id}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <input type="text" id="description" onChange={(e) => setTransferRequest({ ...transferrequest, description: e.target.value })} />
          </div>
          <div className="form-group">
            <label htmlFor="requestDate">Request Date:</label>
            <input type="text" id="requestDate" onChange={(e) => setTransferRequest({ ...transferrequest, request_date: e.target.value })} />
          </div>
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" value={transferrequest.title} readOnly />
          </div>
          <div className="form-group">
            <label htmlFor="type">Type:</label>
            <input type="text" id="type" onChange={(e) => setTransferRequest({ ...transferrequest, type: e.target.value })} />
          </div>
          <div className="form-group">
            <label htmlFor="transferRoutePos">Transfer Route Position:</label>
            <input type="text" id="lastRoutePos" onChange={(e) => setTransferRequest({ ...transferrequest, transferposition: e.target.value })} />
          </div>
          <div className="form-group">
            <label htmlFor="status">Status:</label>
            <input type="text" id="status" onChange={(e) => setTransferRequest({ ...transferrequest, status: e.target.value })} />
          </div>
          <div className="form-group">
            <label htmlFor="cycleID">Cycle ID:</label>
            <select
              name="cycleID"
              id="cycleID"
              className="form-select"
              onChange={(e) => setTransferRequest({ ...transferrequest, cycle_id: e.target.value })}
            >
              <option value="">Select Cycle ID</option>
              {cycle.map((cy) => (
                <option key={cy.id} value={cy.id}>{cy.id}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="HrDecision">HR Decision:</label>
            <input type="text" id="HrDecision" onChange={(e) => setTransferRequest({ ...transferrequest, hr_decision: e.target.value })} />
          </div>
          <div className="form-group">
            <label htmlFor="HrComment">HR Comment:</label>
            <input type="text" id="HrComment" onChange={(e) => setTransferRequest({ ...transferrequest, hr_comment: e.target.value })} />
          </div>
          <div className="button-group">
            <button className="submit-button" type="submit">Submit</button>
            <button className="reset-button" type="button" onClick={() => setTransferRequest({
              id: "",
              employee_id: "",
              description: "",
              request_date: "",
              title: "",
              type: "",
              transferposition: "",
              status: "",
              cycle_id: "",
              hr_decision: "",
              hr_comment: "",
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
      {activeTab === 'view' && <div>View Information form goes here</div>}
    </div>
  );
};

export default InsertTransfer;
