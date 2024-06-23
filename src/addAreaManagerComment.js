import React, { useState } from 'react';
import './employeeForm.css';

const AddAreaManagerComment = () => {
  const [activeTab, setActiveTab] = useState('insert');


 
  const renderForm = () => {
    return (
      <>
      
      <div className="form-container">
      <p className='heading3'>Add Area Manager Comment</p>
        <div className="form-group">
          <label htmlFor="employeeNo">Employee No:</label>
          <input type="text" id="employeeNo" value={"102481"}  disabled/>
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" value={"Kolonnawa"} disabled/>
        </div>
        <div className="form-group">
          <label htmlFor="presentBranch">Present Branch:</label>
          <input type="text" id="presentBranch" value={"Central Supermarket" }disabled/>
        </div>
        <div className="form-group">
        <label htmlFor="eligibleDestination">Eligible Destination:</label>
                  <select className='eligibleDestination'>
                    <option value="Central Supermarket">Central Supermarket</option>
                    <option value="Downtown Supermarket">Downtown Supermarket</option>
                    <option value="Uptown Supermarket">Uptown Supermarket</option>
                    <option value="Downtown Supermarket">Downtown Supermarket</option>
                  </select>
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
                  <input type="text" id="branchNo" value={262} disabled name="branchNo" className="branchNo" />
                </td>
                <td>
                  <input type="text" id="period" name="period" value={"2 years and 3 months"} disabled className="period" />
                </td>
              </tr>
            </tbody>
          </table> </div>
        <div className="form-group">
          <label htmlFor="requestDescription">Request Description:</label>
          <textarea  rows={5} cols={80} type="text" id="requestDescription" />
        </div>
        <p style={{ textAlign: 'center', color:"red",fontSize:"18px",margin:"5px", }}>HR Comment should be added to give reasons for rejection</p>
       
         <div className="form-group">
          <label htmlFor="HrComment">Comment of HR Officer:</label>
          <textarea  rows={5} cols={80} type="text" id="HrComment" />
        </div>
        <div className="form-group">
          <label htmlFor="commentArea1">Comment of Area Manager 1:</label>
          <textarea  rows={5} cols={80} type="text" id="commentArea1" />
        </div>
        <div className="form-group">
          <label htmlFor="commentArea2">Comment of Area Manager 2:</label>
          <textarea  rows={5} cols={80} type="text" id="commentArea2" />
        </div>
        <div className="form-group">
          <label htmlFor="commentArea3">Comment of Area Manager 3:</label>
          <textarea  rows={5} cols={80} type="text" id="commentArea3" />
        </div>
        

        <div className="button-group">
          <button className="submit-button">Submit</button>
          <button className="reset-button">Reset</button>
        </div>
     
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
          {activeTab === 'insert' && renderForm()}
          {activeTab === 'update' && <div>Update Information form goes here</div>}
          {activeTab === 'search' && <div>Search for Employee</div>}
          {activeTab === 'appeal' && <div>Appeal Option</div>}
          {activeTab === 'transferOption' && <div>View transfer option form goes here</div>}
          {activeTab === 'view' && <div>View Information form goes here</div> }
        </div>
  );
};

export default AddAreaManagerComment;
