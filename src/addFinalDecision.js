import React, { useEffect, useState } from "react";
import axios from "axios";
import './test.css';

const AddFinalDecision= () => {
    const [activeTab, setActiveTab] = useState('insert');
    const [transfershedule, setTransferShedule] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState({
    branch_id: "",
    employee_id: "",
    employee_address: "",
    employee_position: "",
    present_branch: "",
    period: "",
    transfer_branch: "",
    description: "",
    hr_comment: "",
    comment_1: "",
    comment_2: "",
    comment_3: "",
    final_decision:"",
  });

  useEffect(() => {
    axios
      .get("http://localhost:3005/auth/transfershedul")
      .then((result) => {
        if (result.data.Status) {
          setTransferShedule(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handletransfershedul = (e) => {
    const employeeId = e.target.value;
    const employee = transfershedule.find(ts => ts.employee_id === parseInt(employeeId));
    if (employee) {
      setSelectedEmployee(employee);
    } else {
      alert(`No employee found with id: ${employeeId}`);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("final_decision", selectedEmployee.final_decision);
    formData.append("employee_id", selectedEmployee.employee_id);
    axios.post("http://localhost:3005/auth/add_final_decision", formData)
      .then((result) => {
        if (result.data.Status) {
          alert("Insert successful");
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
              <p className="heading3"> Add Final Decision</p>
            <div className="form-group">
              <label htmlFor="employeeNo">Employee No:</label>
              <select
              name="employeeNo"
              id="employeeNo"
              className="form-select"
              onChange={handletransfershedul}
            >
              <option value="">Select Employee ID</option>
              {transfershedule.map((ts) => (
                <option key={ts.employee_id} value={ts.employee_id}>{ts.employee_id}</option>
              ))}
            </select>
            </div>
            <div className="form-group">
              <label htmlFor="address">Address:</label>
              <input type="text" id="address" value={selectedEmployee.employee_address} readOnly  />
            </div>
            
            <div className="form-group">
              <label htmlFor="presentBranch">Present Branch:</label>
              <input type="text" id="presentBranch" value={selectedEmployee.present_branch} readOnly />
            </div>
            <div className="form-group">
              <label htmlFor="eligibleDestination">Eligible Destination:</label>
              <input type="text" id="eligibleDestination" value={selectedEmployee.transfer_branch} readOnly  />
            </div>
            
            <div className="form-group">
              <label htmlFor="serviceRecord">Service Record:</label>
              <table id="serviceRecord">
            <thead className='service'>
              <tr >
                <th>Branch No</th>
                <th>Period</th>
              </tr>
            </thead>
            <tbody>
              <tr className='service'>
                <td>
                  <input type="text" id="branchNo" name="branchNo" className="branchNo" value={selectedEmployee.branch_id} readOnly  />
                </td>
                <td>
                  <input type="text" id="period" name="period" className="period" value={selectedEmployee.period} readOnly />
                </td>
              </tr>
              <tr className='service'>
                <td>
                <label htmlFor="requestDescription">Request Description:</label>
                  </td>
                <td>
                <textarea id="requestDescription" name="comments" cols="50" rows="6" className="form-control" value={selectedEmployee.description} readOnly></textarea>
                </td>
              </tr>
              <tr className='service'>
                <td>
                <label htmlFor="hrComment">Comment of HR Officer:</label>
                  </td>
                <td>
                <textarea id="hrComment" name="hrComment" cols="50" rows="6" className="form-control" value={selectedEmployee.hr_comment} readOnly ></textarea>
                </td>
              </tr>
              <tr className='service'>
                <td>
                <label htmlFor="area1Comment">Comment of Area Manager 1:</label>
                  </td>
                <td>
                <textarea id="area1Comment" name="area1Comment" cols="50" rows="6" className="form-control" value={selectedEmployee.comment_1} readOnly></textarea>
                </td>
              </tr>
              <tr className='service'>
                <td>
                <label htmlFor="area2Comment">Comment of Area Manager 2:</label>
                  </td>
                <td>
                <textarea id="area2Comment" name="area2Comment" cols="50" rows="6" className="form-control" value={selectedEmployee.comment_2} readOnly></textarea>
                </td>
              </tr>
              <tr className='service'>
                <td>
                <label htmlFor="area3Comment">Comment of Area Manager 3:</label>
                  </td>
                <td>
                <textarea id="area3Comment" name="area3Comment" cols="50" rows="6" className="form-control" value={selectedEmployee.comment_3} readOnly></textarea>
                </td>
              </tr>
              <tr className='service'>
                <td>
                <label htmlFor="finalDecision">Final Decision:</label>
                  </td>
                <td>
                <textarea id="finalDecision" name="area3Comment" cols="50" rows="6" className="form-control"  onChange={(e) => setSelectedEmployee({ ...selectedEmployee, final_decision: e.target.value })}></textarea>
                </td>
              </tr>
            </tbody>
          </table>
            </div>
            <button className="submit-button" type="submit">Submit</button>
            <button className="reset-button" type="button" onClick={() => setSelectedEmployee({
              branch_id: "",
              employee_id: "",
              employee_address: "",
              employee_position: "",
              present_branch: "",
              period: "",
              transfer_branch: "",
              description: "",
              hr_comment: "",
              comment_1: "",
              comment_2: "",
              comment_3: "",
              final_decision:"",
            })}>Reset</button>
         
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
            <button onClick={() => setActiveTab('transferOption')}> Transfer Option</button>
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
    
    export default AddFinalDecision;