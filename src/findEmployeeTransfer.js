// EmployeeDetails.js
import React, { useState } from 'react';
import './findEmployeeTransfer.css';

const FindEmployeeTransfer = () => {
  const [activeTab, setActiveTab] = useState('insert');

  const renderForm = () => {
    return (
      <>
        <div className="form-container">
          <p className="heading3">Find Employee For Transfer</p>
          <br />
          <div className="form-group">
            <label htmlFor="byEmployeeNo">By Employee No:</label>
            <input type="text" id="byEmployeeNo" />
            <button className="submit-button">Submit</button>
          </div>
        </div>
        <br /><br /><br />
        <table className="employee-table">
          <thead>
            <tr>
              <th colSpan="4">Insert Employee For Transfer</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Insert Transfer Info:</td>
              <td>2525</td>
              <td>Employee No:</td>
              <td><input type="text" id="employeeNo" /></td>
            </tr>
          </tbody>
        </table>
        <br/>
        <div className="action-buttons">
          <button className="submit-button">Submit</button>
          <button className="reset-button">Reset</button>
        </div>
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

export default FindEmployeeTransfer;
