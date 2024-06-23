import React, { useState } from 'react';
import './employeeBranch.css'; // Ensure this path is correct

const EmployeeBranch = () => {
  const [activeTab, setActiveTab] = useState('insert');

  const renderForm = () => {
    return (
      <><div className="form-container">
        <table className="employee-table">
          <thead>
            <tr>
              <th colSpan="3">Search</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>By Name (or person)</td>
              <td><input type="text" id="employeeNo" /></td>
              <td><button className="submit-button">Submit</button></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="form-container">
      <table className="employee-table smaller-table">
          <thead>
            <tr>
              <th colSpan="2">Search Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Employee No:</td>
              <td>
                  <select >
                    <option value="">1023481</option>
                    <option value="1023481">1023481</option>
                    <option value="1023481">1023481</option>
                    <option value="1023481">1023481</option>
                  </select>
                </td>
            </tr>
            <tr>
              <td>Present Branch:</td>
              <td>
                  <select >
                    <option value="">Central Supermarket</option>
                    <option value="1023481">Downtown Supermarket</option>
                    <option value="1023481">1023481</option>
                    <option value="1023481">1023481</option>
                  </select>
                </td>
            </tr>
            <tr>
              <td>Start Date:</td>
              <td><input type="date" id="startDate" /></td>
            </tr>
          </tbody>
        </table></div><br/>
        <div className="button-group">
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

export default EmployeeBranch;
