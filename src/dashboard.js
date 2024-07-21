import React from 'react';
import './dashboard.css';
import HRImage from './HR.png';
const Dashboard = ({ onNavigate }) => {
  return (
    <>
      <div className="dashboard-container">
        <h2>Welcome to HR Manager's Dashboard</h2>
      </div>
      <div className='dropdownContent'>
        <div className="dropdown">
          <button className="dropbtn">Employees 
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <a href="#" onClick={() => onNavigate('employeeDetail')}>Insert Employee Details</a>
            <a href="#" onClick={() => onNavigate('searchEmployeeDetails')}>Search Employee Details</a>
            <a href="#" onClick={() => onNavigate('dependentDetail')}>Dependent Details</a>
          </div>
        </div> 
        <div className="dropdown">
          <button className="dropbtn">Branch 
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <a href="#" onClick={() => onNavigate('branchDetails')}>Insert Branch Details</a>
            <a href="#" onClick={() => onNavigate('EmployeeBranch')}>Enter Employee Branch Details</a>
            <a href="#" onClick={() => onNavigate('viewBranchInfo')}>View Branch Details</a>
          </div>
        </div> 
        <div className="dropdown">
          <button className="dropbtn">Transfer 
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <a href="#" onClick={() => onNavigate('insertTransfer')}>Insert Transfer Request</a>
            <a href="#" onClick={() => onNavigate('deleteTransferSchedule')}>Delete Transfer Request</a>
            <a href="#" onClick={() => onNavigate('rejectTransfer')}>Reject Transfer Request</a>
            <a href="#" onClick={() => onNavigate('transferCycle')}>Enter Transfer Cycle Details</a>
            <a href="#" onClick={() => onNavigate('finalizeTransfer')}>Finalize Transfer Schedule Details</a>
            <a href="#" onClick={() => onNavigate('viewTransferRequest')}>View Transfer Request</a>
            <a href="#" onClick={() => onNavigate('addAreaManagerComment')}>Area Manager Comment</a>
          </div>
        </div> 
        <div className="dropdown">
          <button className="dropbtn">Finalize 
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <a href="#" onClick={() => onNavigate('makeTransferSchedule')}>Tentative Transfer Schedule</a>
            <a href="#" onClick={() => onNavigate('addFinalDecision')}>Final Decision</a>
          </div>
        </div> 
      </div>
      <img src={HRImage} alt="HR Logo" className="hrPic" /> {/* Display HR.png */}
        
    </>
  );
};

export default Dashboard;
