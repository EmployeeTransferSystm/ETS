import React, { useEffect, useState } from "react";
import axios from "axios";
import './employeeForm.css';

const FinalizeTransfer = () => {
  const [activeTab, setActiveTab] = useState('view');
  const [transfershedule, setTransferShedule] = useState([]);
  const [branch, setBranch] = useState([]); // Initialize branch state
  const [areaManagerMap, setAreaManagerMap] = useState({});

  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:3005/auth/transfershedul"),
      axios.get("http://localhost:3005/auth/branch"),
    ])
    .then(([transferscheduleResult, branchResult]) => {
      if (transferscheduleResult.data.Status) {
        setTransferShedule(transferscheduleResult.data.Result);
      } else {
        alert(transferscheduleResult.data.Error);
      }
      if (branchResult.data.Status) {
        setBranch(branchResult.data.Result);
        generateAreaManagerMap(branchResult.data.Result);
      } else {
        alert(branchResult.data.Error);
      }
    })
    .catch(err => console.error(err));
  }, []);

  const generateAreaManagerMap = (branches) => {
    const map = {};
    branches.forEach(branch => {
      map[branch.id] = branch.area_manager_id;
    });
    setAreaManagerMap(map);
  };

  const renderTableRows = () => {
    if (transfershedule.length === 0) {
      return (
        <tr>
          <td colSpan="12">Loading...</td>
        </tr>
      );
    }
    return transfershedule.map((data, index) => (
      <tr key={index}>
        <td>{data.employee_id}</td>
        <td>{data.employee_name}</td>
        <td>{new Date(data.employee_birth).toLocaleDateString()}</td>
        <td>{data.present_branch}</td>
        <td>{areaManagerMap[data.branch_id]}</td>
        <td>{data.description}</td>
        <td>{data.transfer_branch}</td>
        <td>{data.hr_comment}</td>
        <td>{data.comment_1}</td>
        <td>{data.comment_2}</td>
        <td>{data.comment_3}</td>
        <td>{data.hr_comment}</td>
        <td>{data.final_decision}</td>
      </tr>
    ));
  };

  const renderForm = () => {
    return (
      <>
        <p className='heading3'>View or Finalize Transfer Schedule</p>
        <table className="employee-table">
          <thead>
            <tr>
              <th>Employee No:</th>
              <th>Employee Name:</th>
              <th>Date of Birth:</th>
              <th>Present Branch:</th>
              <th>Area Manager ID:</th>
              <th>Request Description:</th>
              <th>Managers Recommendation:</th>
              <th>Eligible Destination:</th>
              <th>Comment of HR Officer</th>
              <th>Comment of Area Manager 1:</th>
              <th>Comment of Area Manager 2:</th>
              <th>Comment of Area Manager 3:</th>
              <th>Final Decision:</th>
            </tr>
          </thead>
          <tbody>
            {renderTableRows()}
          </tbody>
        </table>
        <div className="button-group">
          <button className="finalize-button">Finalize</button>
        </div>
      </>
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
      {activeTab === 'insert' && <div>View Information form goes here</div>}
      {activeTab === 'update' && <div>Update Information form goes here</div>}
      {activeTab === 'search' && <div>Search for Employee</div>}
      {activeTab === 'appeal' && <div>Appeal Option</div>}
      {activeTab === 'transferOption' && <div>View transfer option form goes here</div>}
      {activeTab === 'view' && renderForm()}
    </div>
  );
};

export default FinalizeTransfer;
