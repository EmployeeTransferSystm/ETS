// Dashboard.js
import React from 'react';
import './dashboard.css';

const Dashboard = ({ onNavigate }) => {
  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <button className="dashboard-button" onClick={() => onNavigate('employeeDetail')}>Employee Details</button>
      <button className="dashboard-button" onClick={() => onNavigate('dependentDetail')}>Dependent Details</button>
      <button className="dashboard-button" onClick={() => onNavigate('branchDetails')}>Branch Details</button>
      <button className="dashboard-button" onClick={() => onNavigate('insertTransfer')}>Insert Transfer Request</button><br/>
      
      <button className="dashboard-button" onClick={() => onNavigate('rejectTransfer')}>Reject Transfer Request</button>
      <button className="dashboard-button" onClick={() => onNavigate('findEmployeeTransfer')}>Find Employee Transfer</button>
      <button className="dashboard-button" onClick={() => onNavigate('EmployeeBranch')}>Enter Employee Branch</button>
      <button className="dashboard-button" onClick={() => onNavigate('transferCycle')}>Enter Transfer Cycle Details</button><br/>
      <button className="dashboard-button" onClick={() => onNavigate('viewBranchInfo')}>View Branch Information</button>
     
      <button className="dashboard-button" onClick={() => onNavigate('finalizeTransfer')}>Finalize Tentative Transfer Schedule</button>
      <button className="dashboard-button" onClick={() => onNavigate('viewTransferRequest')}>View Transfer Request</button>
      <button className="dashboard-button" onClick={() => onNavigate('addAreaManagerComment')}>Add Area Manager Comment</button><br/>
      <button className="dashboard-button" onClick={() => onNavigate('searchEmployeeDetails')}>Search Employee Details</button>
      <button className="dashboard-button" onClick={() => onNavigate('deleteTransferSchedule')}>Delete Transfer Schedule</button>
      <button className="dashboard-button" onClick={() => onNavigate('makeTransferSchedule')}>Make Tentative Transfer Schedule</button>
      <button className="dashboard-button" onClick={() => onNavigate('addFinalDecision')}>Add Final Decision</button>
     
      
    </div>
  );
};

export default Dashboard;
