
import React, { useState } from 'react';
import './employeeForm.css';

const BranchDetails = () => {
  const [activeTab, setActiveTab] = useState('insert');

  const renderForm = () => {
    return (
      
        <div className="form-container">
          <p className="heading3"> Enter Branch Details</p>
        <div className="form-group">
          <label htmlFor="branchNo">Branch No:</label>
          <input type="text" id="branchNo" />
        </div>
        <div className="form-group">
          <label htmlFor="branchName">Branch  Name:</label>
          <input type="text" id="branchName" />
        </div>
        <div className="form-group">
          <label htmlFor="branchAddress">Branch Address:</label>
          <input type="text" id="branchAddress" />
        </div>
        
        <div className="form-group">
          <label htmlFor="areaManagerID">Area Manager ID:</label>
          <input type="text" id="areaManagerID" />
        </div>
        

        <div className="button-group">
          <button className="submit-button">Submit</button>
          <button className="reset-button">Reset</button>
        </div>
     
      </div>
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

export default BranchDetails;
