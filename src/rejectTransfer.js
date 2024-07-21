import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './employeeForm.css';

const RejectTransfer = () => {
  const [activeTab, setActiveTab] = useState('insert');
  const [transferRequest, setTransferRequest] = useState([]);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [selectedRequestId, setSelectedRequestId] = useState(null);  // State to capture selected request ID

  useEffect(() => {
    axios.get('http://localhost:3005/auth/transferrequest')
      .then((response) => {
        if (response.data.Status) {
          setTransferRequest(response.data.Result);
        } else {
          alert(response.data.Error);
        }
      })
      .catch((error) => {
        console.error('There was an error fetching the transfer requests!', error);
      });
  }, []);

  const handleRequestChange = (e) => {
    const requestId = e.target.value;
    setSelectedRequestId(requestId);  // Set the selected request ID
    axios.get(`http://localhost:3005/auth/transfer_request_details?id=${requestId}`)
      .then((response) => {
        if (response.data.Status) {
          setSelectedRequest(response.data.Result);
        } else {
          alert(response.data.Error);
        }
      })
      .catch((error) => {
        console.error('There was an error fetching the transfer request details!', error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedRequest) {
      alert('No transfer request selected.');
      return;
    }

    console.log("Submitting Reject Transfer Request with ID:", selectedRequestId);  // Debugging log
    console.log("Submitting HR Comment:", selectedRequest.hr_comment);  // Debugging log

    axios.post('http://localhost:3005/auth/reject_transfer_request', {
      id: selectedRequestId,  // Use the captured request ID
      hr_comment: selectedRequest.hr_comment
    })
    .then((response) => {
      if (response.data.Status) {
        alert('Transfer request rejected successfully');
        setSelectedRequest(null);  // Clear the selected request after successful submission
        setSelectedRequestId(null);  // Clear the selected request ID
      } else {
        alert(response.data.Error);
      }
    })
    .catch((error) => {
      console.error('There was an error rejecting the transfer request!', error);
    });
  };

  const renderForm = () => {
    return (
      <form className="row g-1" onSubmit={handleSubmit}>
        <div className="form-container">
          <p className="heading3">Reject Transfer Request</p>
          <div className="form-group">
            <label htmlFor="requestId">Request ID:</label>
            <select
              name="requestId"
              id="requestId"
              className="form-select"
              onChange={handleRequestChange}
              value={selectedRequestId || ''}  // Set the value to the selected request ID
            >
              <option value="">Select Request ID</option>
              {transferRequest.map((tr) => (
                <option key={tr.id} value={tr.id}>{tr.id}</option>
              ))}
            </select>
          </div>
          {selectedRequest && (
            <>
              <div className="form-group">
                <label htmlFor="employeeName">Employee Name:</label>
                <input type="text" id="employeeName" value={selectedRequest.employee_name || selectedRequest.name} readOnly />
              </div>
              <div className="form-group">
                <label htmlFor="address">Address:</label>
                <input type="text" id="address" value={selectedRequest.employee_address || selectedRequest.address} readOnly />
              </div>
              <div className="form-group">
                <label htmlFor="birthDate">Date of Birth:</label>
                <input type="text" id="birthDate" value={selectedRequest.employee_birth || selectedRequest.birth} readOnly />
              </div>
              <div className="form-group">
                <label htmlFor="position">Position:</label>
                <input type="text" id="position" value={selectedRequest.employee_position || selectedRequest.position} readOnly />
              </div>
              <div className="form-group">
                <label htmlFor="presentBranch">Present Branch:</label>
                <input type="text" id="presentBranch" value={selectedRequest.present_branch || selectedRequest.branch_name} readOnly />
              </div>
              <div className="form-group">
                <label htmlFor="startDatePresent">Start Date in Present Branch:</label>
                <input type="text" id="startDatePresent" value={selectedRequest.employee_start_date || selectedRequest.start_date} readOnly />
              </div>
              <div className="form-group">
                <label htmlFor="grade">Grade:</label>
                <input type="text" id="grade" value={selectedRequest.employee_grade || selectedRequest.grade} readOnly />
              </div>
              <div className="form-group">
                <label htmlFor="requestDescription">Request Description:</label>
                <textarea id="requestDescription" name="comments" cols="50" rows="4" className="form-control" value={selectedRequest.description} readOnly></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="CommentOfHrOfficer">Comment of HR Officer:</label>
                <textarea id="CommentOfHrOfficer" name="comments" cols="50" rows="4" className="form-control" value={selectedRequest.hr_comment} onChange={(e) => setSelectedRequest({...selectedRequest, hr_comment: e.target.value})}></textarea>
              </div><br /><br />
              <div className="button-group">
                <button className="submit-button" type="submit">Submit</button>
                <button className="reset-button" type="button" onClick={() => setSelectedRequest(null)}>Reset</button>
              </div>
            </>
          )}
        </div>
      </form>
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