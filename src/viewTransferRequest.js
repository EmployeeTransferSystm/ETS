import React, { useEffect, useState } from "react";
import axios from "axios";
import './employeeForm.css';

const ViewTransfer = () => {
  const [activeTab, setActiveTab] = useState('view');
  const [transferrequest, setTransferRequest] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3005/auth/transferrequest")
      .then(response => {
        if (response.data.Status) {
          setTransferRequest(response.data.Result);
        } else {
          alert(response.data.Error);
        }
      })
      .catch(err => console.error(err));
  }, []);

  const renderTableRows = () => {
    if (transferrequest.length === 0) {
      return (
        <tr>
          <td colSpan="12">Loading...</td>
        </tr>
      );
    }
    return transferrequest.map((data, index) => (
      <tr key={index}>
        <td>{data.employee_id}</td>
        <td>{data.description}</td>
        <td>{new Date(data.request_date).toLocaleDateString()}</td>
        <td>{data.title}</td>
        <td>{data.type}</td>
        <td>{data.transferposition}</td>
        <td>{data.status}</td>
        <td>{data.cycle_id}</td>
        <td>{data.hr_decision}</td>
        <td>{data.hr_comment}</td>
      </tr>
    ));
  };

  const renderForm = () => (
    <>
      <p className='heading3'>Received Transfer Request</p>
      <table className="employee-table">
        <thead>
          <tr>
            <th>Employee No:</th>
            <th>Description:</th>
            <th>Request Date:</th>
            <th>Title:</th>
            <th>Transfer Type:</th>
            <th>Transfer Route Position:</th>
            <th>Status:</th>
            <th>Transfer Cycle ID:</th>
            <th>HR Decision:</th>
            <th>HR Comment:</th>
          </tr>
        </thead>
        <tbody>
          {renderTableRows()}
        </tbody>
      </table>
    </>
  );

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
      {activeTab === 'insert' && <div>Insert Information form goes here</div>}
      {activeTab === 'update' && <div>Update Information form goes here</div>}
      {activeTab === 'search' && <div>Search for Employee</div>}
      {activeTab === 'appeal' && <div>Appeal Option</div>}
      {activeTab === 'transferOption' && <div>Transfer Option form goes here</div>}
      {activeTab === 'view' && renderForm()}
    </div>
  );
};

export default ViewTransfer;
