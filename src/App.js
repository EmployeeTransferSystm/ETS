import React, { useState } from 'react';
import Header from './header';
import LoginForm from './login';
import Dashboard from './dashboard';
import EmployeeDetails from './employeeDetail';
import DependentDetail from './dependentDetail';
import BranchDetails from './branchDetails';
import InsertTransfer from './insertTransfer';
import RejectTransfer from './rejectTransfer';
import FindEmployeeForTransfer from './findEmployeeTransfer';
import EmployeeBranch from './EmployeeBranch';
import TransferCycle from './transferCycle';
import ViewBranchInfo from './viewBranchInfo';
import FinalizeTransfer from './finalizeTransfer';
import ViewTransfer from './viewTransferRequest';
import AddAreaManagerComment from './addAreaManagerComment';
import SearchEmployeeDetails from './searchEmployeeDetails';
import DeleteTransfer from './deleteTransferSchedule';
import MakeTransferSchedule from './makeTransferSchedule';
import AddFinalDecision from './addFinalDecision';

const App = () => {
  const [currentPage, setCurrentPage] = useState('login');

  const handleLoginSuccess = () => {
    setCurrentPage('dashboard');
  };

  return (
    <div>
      <Header onNavigate={setCurrentPage} />
      {currentPage === 'login' && <LoginForm onLoginSuccess={handleLoginSuccess} />}
      {currentPage === 'dashboard' && <Dashboard onNavigate={setCurrentPage} />}
      {currentPage === 'employeeDetail' && <EmployeeDetails />}
      {currentPage === 'dependentDetail' && <DependentDetail />}
      {currentPage === 'branchDetails' && <BranchDetails />}
      {currentPage === 'insertTransfer' && <InsertTransfer />}
      {currentPage === 'rejectTransfer' && <RejectTransfer />}
      {currentPage === 'findEmployeeTransfer' && <FindEmployeeForTransfer />}
      {currentPage === 'EmployeeBranch' && <EmployeeBranch />}
      {currentPage === 'transferCycle' && <TransferCycle />}
      {currentPage === 'viewBranchInfo' && <ViewBranchInfo />}
      {currentPage === 'finalizeTransfer' && <FinalizeTransfer />}
      {currentPage === 'viewTransferRequest' && <ViewTransfer />}
      {currentPage === 'addAreaManagerComment' && <AddAreaManagerComment />}
      {currentPage === 'searchEmployeeDetails' && <SearchEmployeeDetails />}
      {currentPage === 'deleteTransferSchedule' && <DeleteTransfer />}
      {currentPage === 'makeTransferSchedule' && <MakeTransferSchedule />}
      {currentPage === 'addFinalDecision' && <AddFinalDecision />}
    </div>
  );
};

export default App;
