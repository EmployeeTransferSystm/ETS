import React, { useState } from 'react';
import './employeeForm.css';

const InsertTransfer= () => {
    const [activeTab, setActiveTab] = useState('insert');
    const renderForm = () => {
        return (
          
            <div className="form-container">
              <p className="heading3"> Insert Transfer Request</p>
            <div className="form-group">
              <label htmlFor="requestID">Request ID:</label>
              <input type="text" id="requestID" /> 
            </div>
            <div className="form-group">
              <label htmlFor="employeeNo">Employee No:</label>
              <input type="text" id="employeeName" />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <input type="text" id="description" />
            </div>
           
            <div className="form-group">
              <label htmlFor="requestDate">Request Date:</label>
              <input type="text" id="requestDate" />
            </div>
            <div className="form-group">
              <label htmlFor="title">Title:</label>
              <input type="text" id="title" />
            </div>
            <div className="form-group">
              <label htmlFor="type">Type:</label>
              <input type="text" id="type" />
            </div>
            <div className="form-group">
              <label htmlFor="lastRoutePos">Last Route Position:</label>
              <input type="text" id="lastRoutePos" />
            </div>
            <div className="form-group">
              <label htmlFor="status">Status:</label>
              <input type="text" id="status" />
            </div>
            <div className="form-group">
              <label htmlFor="cycleID">Cycle ID:</label>
              <input type="text" id="cycleID" />
            </div>
            <div className="form-group">
              <label htmlFor="HrDecision">HR Decision:</label>
              <input type="text" id="HrDecision" />
            </div>
            <div className="form-group">
              <label htmlFor="HrComment">HR Comment:</label>
              <input type="text" id="HrComment" />
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
    
    export default InsertTransfer;