import React, { useState } from 'react';
import './employeeForm.css';

const DependentDetail= () => {
    const [activeTab, setActiveTab] = useState('insert');
    const renderForm = () => {
        return (
          
            <div className="form-container">
              <p className="heading3"> Enter Dependent Details</p>
            <div className="form-group">
              <label htmlFor="employeeNo">Employee No:</label>
              <input type="text" id="employeeNo" /> 
            </div>
            <div className="form-group">
              <label htmlFor="dependentNo">Dependent No:</label>
              <input type="text" id="dependentNo" />
            </div>
            <div className="form-group">
              <label htmlFor="address">Dependent Name:</label>
              <input type="text" id="address" />
            </div>
            <div className="form-group">
              <label htmlFor="gender">Gender:</label>
              <select id="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="birthDate">Date of Birth:</label>
              <input type="text" id="birthDate" />
            </div>
            <div className="form-group">
              <label htmlFor="civilStatus">Relationship:</label>
              <input type="text" id="civilStatus" />
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
    
    export default DependentDetail;