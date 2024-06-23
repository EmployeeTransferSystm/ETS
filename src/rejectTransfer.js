import React, { useState } from 'react';
import './employeeForm.css';

const RejectTransfer= () => {
    const [activeTab, setActiveTab] = useState('insert');
    const renderForm = () => {
        return (
          
            <div className="form-container">
              <p className="heading3"> Reject Transfer Request</p>
            <div className="form-group">
              <label htmlFor="employeeNo">Request ID:</label>
              <input type="text" id="employeeNo" /> 
            </div>
            <div className="form-group">
              <label htmlFor="employeeName">Employee Name:</label>
              <input type="text" id="employeeName" />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address:</label>
              <input type="text" id="address" />
            </div>
           
            <div className="form-group">
              <label htmlFor="birthDate">Date of Birth:</label>
              <input type="date" id="birthDate" />
            </div>
            <div className="form-group">
              <label htmlFor="position">Position:</label>
              <input type="text" id="position" />
            </div>
            <div className="form-group">
              <label htmlFor="presentBranch">Present Branch:</label>
              <input type="text" id="presentBranch" />
            </div>
            <div className="form-group">
              <label htmlFor="startDatePresent">Start Date in Present Branch:</label>
              <input type="date" id="startDatePresent" />
            </div>
            <div className="form-group">
              <label htmlFor="grade">Grade:</label>
              <input type="text" id="grade" />
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
                  <input type="text" id="branchNo" name="branchNo" className="branchNo" />
                </td>
                <td>
                  <input type="text" id="period" name="period" className="period" />
                </td>
              </tr>
            </tbody>
          </table>
            </div>
            <div className="form-group">
              <label htmlFor="requestDescription">Request Description:</label>
              <textarea id="requestDescription" name="comments" cols="50" rows="4" className="form-control"></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="CommentOfHrOfficer">Comment of HR Officer:</label>
              <textarea id="CommentOfHrOfficer" name="comments"cols="50" rows="4" className="form-control"></textarea>
            </div><br/><br/>
            <div className='textBox'>
            <input type="text" id="employee-ID" />
            <input type="text" id="transferCycleID" />
            </div><br/><br/>
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
          {activeTab === 'view' && <div>View Information form goes here</div>}
        </div>
      );
    };
    
    export default RejectTransfer;