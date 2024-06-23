import React, { useState } from 'react';
import './searchEmployeeDetails.css';

const SearchEmployeeDetails = () => {
  const [activeTab, setActiveTab] = useState('search');

  const renderForm = () => {
    return (
      <>
        <div>
          <table className="outer-table">
            <tbody>
              <tr>
                <td>
                  <table className="inner-table">
                    <caption>Search Employee By Experience of current branch</caption><br/>
                    <tbody>
                      <tr>
                        <td>Experience Greater Than </td>
                        <td className='inputBox'><input type='text' /></td>
                        <td>years</td>
                        <td>
                        <button className="submit-button">Submit</button>
                        </td>
                      </tr>
                      <tr>
                      <td>Experience Greater Than </td>
                        <td><input type='text' /></td>
                        <td>years</td>
                        <td>
                        <button className="submit-button">Submit</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td>
                  <table className="inner-table">
                    <caption>Search Employee By Service Experience</caption>
                    <br/>
                    <tbody>
                      <tr>
                      <td>Experience Greater Than </td>
                        <td><input type='text' /></td>
                        <td>years</td>
                        <td>
                        <button className="submit-button">Submit</button>
                        </td>
                      </tr>
                      <tr>
                      <td>Experience Greater Than </td>
                        <td className='inputBox'><input type='text' /></td>
                        <td>years</td>
                        <td>
                        <button className="submit-button">Submit</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <br/><br/>
                </td>
              </tr> 
                <tr>
                <td>
                  <table className="inner-table">
                    <caption>Search Employee By Name Pattern</caption>
                    <br/>
                    <tbody>
                      <tr>
                      <td>By Name: </td>
                        <td className='inputBox'><input type='text' /></td>
                        <td>years</td>
                        <td>
                        <button className="submit-button">Submit</button>
                        </td>
                      </tr>
                      
                      <tr>
                        
                        <td colSpan={4}>Search Employee By Employee No: </td>  
                      </tr>
                      <tr>
                        
                      <td>By Name: </td>
                        <td className='inputBox'><input type='text' /></td>
                        <td>years</td>
                        <td>
                        <button className="submit-button">Submit</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                
                <td>
                  <table className="inner-table">
                    <caption>Search Employee By Job Category</caption>
                    <tbody>
                      
                      <tr>
                      <td>By Name: </td>
                      <td className='jobCategoryInput'>
                          <select>
                            <option value="">Select Job Category</option>
                            <option value="category1">Category 1</option>
                            <option value="category2">Category 2</option>
                            <option value="category3">Category 3</option>
                            <option value="category4">Category 4</option>
                            <option value="category5">Category 5</option>
                          </select>
                        </td>
                        <td>
                        <button className="submit-button">Submit</button>
                        </td>
                        
                      </tr>
                      
                      
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
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
        <button onClick={() => setActiveTab('transferOption')}>Transfer Option</button>
        <button onClick={() => setActiveTab('view')}>View Information</button>
      </div>
      {activeTab === 'insert' && <div>Insert for Employee</div>}
      {activeTab === 'update' && <div>Update Information form goes here</div>}
      {activeTab === 'search' && renderForm()}
      {activeTab === 'appeal' && <div>Appeal Option</div>}
      {activeTab === 'transferOption' && <div>View transfer option form goes here</div>}
      {activeTab === 'view' && <div>View Information form goes here</div>}
    </div>
  );
};

export default SearchEmployeeDetails;
