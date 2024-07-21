import React, { useState,useEffect } from 'react';
import './employeeForm.css';
import axios from "axios";

const ViewBranchInfo = () => {
  const [activeTab, setActiveTab] = useState('insert');
  const [branch,setBranch] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3005/auth/branch")
      .then((result) => {
        if (result.data.Status) {
          setBranch(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  // Dummy data for the table
  

  // Function to render the table rows with dummy data
  const renderTableRows = () => {
    return branch.map((data, index) => (
      <tr key={index}>
        <td>{data.id}</td>
        <td>{data.branch_name}</td>
        <td>{data.branch_address}</td>
        <td>{data.area_manager_id}</td>
      </tr>
    ));
  };

 
  const renderForm = () => {
    return (
      <>
      
          <p className="heading3"> View Employee Details</p>
        
        <table className="employee-table">
          <thead>
            <tr>
              <th>Branch No</th>
              <th>Branch Name</th>
              <th>Address</th>
              <th>Area Manager ID</th>
            </tr>
          </thead>
          <tbody>
            {renderTableRows()}
          </tbody>
        </table>
       
      </>
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

export default ViewBranchInfo;
