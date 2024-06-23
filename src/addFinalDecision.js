import React, { useState } from 'react';
import './test.css';

const AddFinalDecision= () => {
    const [activeTab, setActiveTab] = useState('insert');
    const renderForm = () => {
        return (
          
            <div className="form-container">
              <p className="heading3"> Add Final Decision</p>
            <div className="form-group">
              <label htmlFor="employeeNo">Employee No:</label>
              <input type="text" id="employeeNo" disabled/> 
            </div>
            <div className="form-group">
              <label htmlFor="address">Address:</label>
              <input type="text" id="address" disabled />
            </div>
            
            <div className="form-group">
              <label htmlFor="presentBranch">Present Branch:</label>
              <input type="text" id="presentBranch" disabled/>
            </div>
            <div className="form-group">
              <label htmlFor="eligibleDestination">Eligible Destination:</label>
              <input type="text" id="eligibleDestination"disabled />
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
                  <input type="text" id="branchNo" name="branchNo" className="branchNo" disabled />
                </td>
                <td>
                  <input type="text" id="period" name="period" className="period" disabled/>
                </td>
              </tr>
              <tr className='service'>
                <td>
                <label htmlFor="requestDescription">Request Description:</label>
                  </td>
                <td>
                <textarea id="requestDescription" name="comments" cols="50" rows="6" className="form-control"></textarea>
                </td>
              </tr>
              <tr className='service'>
                <td>
                <label htmlFor="hrComment">Comment of HR Officer:</label>
                  </td>
                <td>
                <textarea id="hrComment" name="hrComment" cols="50" rows="6" className="form-control"></textarea>
                </td>
              </tr>
              <tr className='service'>
                <td>
                <label htmlFor="area1Comment">Comment of Area Manager 1:</label>
                  </td>
                <td>
                <textarea id="area1Comment" name="area1Comment" cols="50" rows="6" className="form-control"></textarea>
                </td>
              </tr>
              <tr className='service'>
                <td>
                <label htmlFor="area2Comment">Comment of Area Manager 2:</label>
                  </td>
                <td>
                <textarea id="area2Comment" name="area2Comment" cols="50" rows="6" className="form-control"></textarea>
                </td>
              </tr>
              <tr className='service'>
                <td>
                <label htmlFor="area3Comment">Comment of Area Manager 3:</label>
                  </td>
                <td>
                <textarea id="area3Comment" name="area3Comment" cols="50" rows="6" className="form-control"></textarea>
                </td>
              </tr>
              <tr className='service'>
                <td>
                <label htmlFor="finalDecision">Final Decision:</label>
                  </td>
                <td>
                <textarea id="finalDecision" name="area3Comment" cols="50" rows="6" className="form-control"></textarea>
                </td>
              </tr>
            </tbody>
          </table>
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
    
    export default AddFinalDecision;