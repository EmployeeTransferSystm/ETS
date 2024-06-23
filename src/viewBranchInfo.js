import React, { useState } from 'react';
import './employeeForm.css';

const ViewBranchInfo = () => {
  const [activeTab, setActiveTab] = useState('insert');

  // Dummy data for the table
  const dummyData = [
    { branchNo: '001', branchName: 'Central Supermarket', address: '123 Main St', areaManagerId: 'AM001' },
    { branchNo: '002', branchName: 'Downtown Supermarket', address: '456 Elm St', areaManagerId: 'AM002' },
    { branchNo: '003', branchName: 'Westside Grocery', address: '789 Oak St', areaManagerId: 'AM003' },
    { branchNo: '004', branchName: 'East End Market', address: '321 Pine St', areaManagerId: 'AM004' },
    { branchNo: '005', branchName: 'Northside Mart', address: '654 Maple Ave', areaManagerId: 'AM005' },
    { branchNo: '006', branchName: 'Southtown Foods', address: '987 Cedar Rd', areaManagerId: 'AM006' },
    { branchNo: '007', branchName: 'Uptown Grocers', address: '741 Birch Ln', areaManagerId: 'AM007' },
    { branchNo: '008', branchName: 'Harbor Market', address: '852 Beach Blvd', areaManagerId: 'AM008' },
    { branchNo: '009', branchName: 'Lakeview Foods', address: '369 River Dr', areaManagerId: 'AM009' },
    { branchNo: '010', branchName: 'Mountain Fresh', address: '159 Hillside Ave', areaManagerId: 'AM010' }
  ];

  // Function to render the table rows with dummy data
  const renderTableRows = () => {
    return dummyData.map((data, index) => (
      <tr key={index}>
        <td>{data.branchNo}</td>
        <td>{data.branchName}</td>
        <td>{data.address}</td>
        <td>{data.areaManagerId}</td>
      </tr>
    ));
  };

 
  const renderForm = () => {
    return (
      <>
      
          <p className="heading3"> View Employee Details</p>
        
        <table className="employee-table">
          <thead>
            <tr>
              <th>Branch No</th>
              <th>Branch Name</th>
              <th>Address</th>
              <th>Area Manager ID</th>
            </tr>
          </thead>
          <tbody>
            {renderTableRows()}
          </tbody>
        </table>
       
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

export default ViewBranchInfo;
