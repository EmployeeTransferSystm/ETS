import React, { useState } from 'react';
import './employeeForm.css';

const FinalizeTransfer = () => {
  const [activeTab, setActiveTab] = useState('view');


 
  const renderForm = () => {
    return (
      <>
      <p className='heading3'>View or Finalize Transfer Schedule</p>
       <table className="employee-table">
        <tr>
            <th>Employee No: </th>
            <th>Employee Name: </th>
            <th>Date of Birth: </th>
            <th>Present Branch: </th>
            <th>Area Manager ID: </th>
            <th>Request Description: </th>
            <th>Managers Recommendation: </th>
            <th>Eligible Destination: </th>
            <th>Comment of HR Officer </th>
            <th>Comment of Area Manager 1: </th>
            <th>Comment of Area Manager 2: </th>
            <th>Comment of Area Manager 3: </th>
            <th>Final Decision: </th>
        </tr>
        <tr>
            <td>12521 </td>
            <td>R M Stanislaus </td>
            <td>1984.10.09 </td>
            <td>Central Supermarket </td>
            <td>2725 </td>
            <td>Personal Request </td>
            <td>General Manager </td>
            <td>Central SuperMarket (Area 1)</td>
            <td>Eligible </td>
            <td>Eligible, needs training </td>
            <td>Eligible, needs training</td>
            <td>Eligible</td>
            <td><a href='finalDecision.js'>Final Decision</a> </td>
        </tr>

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
          {activeTab === 'view' &&  renderForm()}
        </div>
  );
};

export default FinalizeTransfer;
