
import React, { useState } from 'react';
import './employeeForm.css';

const TransferCycle = () => {
  const [activeTab, setActiveTab] = useState('insert');

  const renderForm = () => {
    return (
      
        <div className="form-container">
          
          <p className="heading3"> Enter Transfer Cycle ID</p>
        <div className="form-group">
          <label htmlFor="transferCycleID">Transfer Cycle ID:</label>
          <input type="text" id="transferCycleID" />
        </div>
        <div className="form-group">
          <label htmlFor="closingDate">Closing Date:</label>
          <input type="date" id="closingDate" />
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

export default TransferCycle;
