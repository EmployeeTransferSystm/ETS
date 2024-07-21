import React, { useEffect, useState } from "react";
import axios from "axios";
import './employeeForm.css';

const MakeTransferSchedule = () => {
  const [activeTab, setActiveTab] = useState('insert');
  const [transfershedule, setTransferShedule] = useState({
    id: "",
    branch_id:"",
    employee_id: "",
    employee_name: "",
    employee_address: "",
    employee_birth: "",
    employee_position: "",
    present_branch: "",
    employee_start_date: "",
    employee_grade: "",
    period:"",
    description: "",
    trnasfer_branch: "",
    hr_comment: "",
  });
  const [employee, setEmployee] = useState([]);
  const [branch, setBranch] = useState([]);
  const [transferrequest, setTransferRequest] = useState([]);

  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:3005/auth/branch"),
      axios.get("http://localhost:3005/auth/employee"),
      axios.get("http://localhost:3005/auth/transferrequest"),
    ])
      .then(([branchResult, employeeResult, transferRequestResult]) => {
        if (branchResult.data.Status) {
          setBranch(branchResult.data.Result);
        } else {
          alert(branchResult.data.Error);
        }
        if (employeeResult.data.Status) {
          setEmployee(employeeResult.data.Result);
        } else {
          alert(employeeResult.data.Error);
        }
        if (transferRequestResult.data.Status) {
          setTransferRequest(transferRequestResult.data.Result);
        } else {
          alert(transferRequestResult.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  const calculateWorkPeriod = (startDateText) =>{
    var startDate = new Date(startDateText);
    var currentDate = new Date();

    var differenceInTime = currentDate.getTime() - startDate.getTime();
    var differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));

    var years = Math.floor(differenceInDays / 365.25);
    var months = Math.floor((differenceInDays % 365.25) / 30.44);
    var days = Math.floor((differenceInDays % 365.25) % 30.44);

    return `${years} years, ${months} months, and ${days} days`;
};  
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("id", transfershedule.id);
    formData.append("branch_id", transfershedule.branch_id);
    formData.append("employee_id", transfershedule.employee_id);
    formData.append("employee_name", transfershedule.employee_name);
    formData.append("employee_address", transfershedule.employee_address);
    formData.append("employee_birth", transfershedule.employee_birth);
    formData.append("employee_position", transfershedule.employee_position);
    formData.append("present_branch", transfershedule.present_branch);
    formData.append("employee_start_date", transfershedule.employee_start_date);
    formData.append("employee_grade", transfershedule.employee_grade);
    formData.append("period", transfershedule.period);
    formData.append("description", transfershedule.description);
    formData.append("trnasfer_branch",transfershedule.trnasfer_branch)
    formData.append("hr_comment", transfershedule.hr_comment);

    axios.post("http://localhost:3005/auth/make_transfer_shedule", formData)
      .then((result) => {
        if (result.data.Status) {
          alert("Insert successful");
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  };
  const handleBranchChange = (e) => {
    const selectedBranchId = e.target.value;
    const selectedBranch = branch.find(b => b.id === parseInt(selectedBranchId));
    if (selectedBranch) {
      setTransferShedule({ ...transfershedule, trnasfer_branch: selectedBranch.branch_name });
    } else {
      alert(`No branch found with id: ${selectedBranchId}`);
    }
  };

  const handleEmployeeChange = (e) => {
    const employeeId = e.target.value;
    const selectedEmployee = employee.find(em => em.id === parseInt(employeeId));
    if (selectedEmployee) {
      const selectedBranch = branch.find(br => br.id === selectedEmployee.branch_id);
      const branchName = selectedBranch ? selectedBranch.branch_name: "";
      const selectedRequest = transferrequest.find(tr => tr.employee_id === parseInt(employeeId));
      const formattedBirthDate = new Date(selectedEmployee.birth).toISOString().split('T')[0];
      const formattedstart_date = new Date(selectedEmployee.start_date).toISOString().split('T')[0];
      
      setTransferShedule({
        ...transfershedule,
        branch_id: selectedEmployee.branch_id,
        employee_id: employeeId,
        employee_name: selectedEmployee.name,
        employee_address: selectedEmployee.address,
        employee_birth: formattedBirthDate,
        employee_position: selectedEmployee.position,
        present_branch: branchName,
        employee_start_date: formattedstart_date,
        employee_grade: selectedEmployee.grade,
        period:calculateWorkPeriod(formattedstart_date),
        description: selectedRequest ? selectedRequest.description : "",
        hr_comment: selectedRequest ? selectedRequest.hr_comment : ""
      });
    } else {
      alert(`No employee found with id: ${employeeId}`);
    }
  };

  const renderForm = () => {
    return (
      <form className="row g-1" onSubmit={handleSubmit}>
        <div className="form-container">
          <p className="heading3"> Make Tentative Transfer Schedule</p>
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
            <label htmlFor="employeeName">Employee Name:</label>
            <input type="text" id="employeeName" value={transfershedule.employee_name} readOnly />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input type="text" id="address" value={transfershedule.employee_address} readOnly />
          </div>
          <div className="form-group">
            <label htmlFor="birthDate">Date of Birth:</label>
            <input type="text" id="birthDate" value={transfershedule.employee_birth} readOnly />
          </div>
          <div className="form-group">
            <label htmlFor="position">Position:</label>
            <input type="text" id="position" value={transfershedule.employee_position} readOnly />
          </div>
          <div className="form-group">
            <label htmlFor="presentBranch">Present Branch:</label>
            <input type="text" id="presentBranch" value={transfershedule.present_branch} readOnly />
          </div>
          <div className="form-group">
            <label htmlFor="startDatePresent">Start Date in Present Branch:</label>
            <input type="text" id="startDatePresent" value={transfershedule.employee_start_date} readOnly />
          </div>
          <div className="form-group">
            <label htmlFor="grade">Grade:</label>
            <input type="text" id="grade" value={transfershedule.employee_grade} readOnly />
          </div>
          <div className="form-group">
            <label htmlFor="serviceRecord">Service Record:</label>
            <table id="serviceRecord">
              <thead className='service'>
                <tr>
                  <th>Branch No</th>
                  <th>Period</th>
                </tr>
              </thead>
              <tbody>
                <tr className='service'>
                  <td>
                    <input type="text" id="branchNo" name="branchNo" className="branchNo" value={transfershedule.branch_id}  readOnly/>
                  </td>
                  <td>
                    <input type="text" id="period" name="period" className="period" value={transfershedule.period}  readOnly />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="form-group">
            <label htmlFor="requestDescription">Request Description:</label>
            <textarea id="requestDescription" name="comments" cols="50" rows="4" className="form-control"
              value={transfershedule.description} readOnly
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="transferBranch">Transfer Branch:</label>
            <select
              id="transferBranch"
              onChange={handleBranchChange}
            >
              <option value="">Select Branch</option>
              {branch.map((b) => (
                <option key={b.id} value={b.id}>{b.branch_name}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="CommentOfHrOfficer">Comment of HR Officer:</label>
            <textarea id="CommentOfHrOfficer" name="comments" cols="50" rows="4" className="form-control"
              value={transfershedule.hr_comment} readOnly
            ></textarea>
          </div><br /><br />
          <div className="button-group">
            <button className="submit-button" type="submit">Submit</button>
            <button className="reset-button" type="button" onClick={() => setTransferShedule({
              id: "",
              branch_id:"",
              employee_id: "",
              employee_name: "",
              employee_address: "",
              employee_birth: "",
              employee_position: "",
              present_branch: "",
              employee_start_date: "",
              employee_grade: "",
              period:"",
              description: "",
              trnasfer_branch: "",
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
        <button onClick={() => setActiveTab('search')}>Search Employee</button>
        <button onClick={() => setActiveTab('appeal')}>Appeal Option</button>
        <button onClick={() => setActiveTab('transferOption')}>Transfer Option</button>
        <button onClick={() => setActiveTab('view')}>View Information</button>
      </div>
      {activeTab === 'insert' && renderForm()}
      {activeTab === 'update' && <div>Update Information form goes here</div>}
      {activeTab === 'search' && <div>Search for Employee</div>}
      {activeTab === 'appeal' && <div>Appeal Option</div>}
      {activeTab === 'transferOption' && <div>View transfer option form goes here</div>}
      {activeTab === 'view' && <div>View Information form goes here</div>}
    </div>
  );
};

export default MakeTransferSchedule;
