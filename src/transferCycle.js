import React, { useEffect, useState } from "react";
import axios from "axios";
import './employeeForm.css';

const TransferCycle = () => {
  const [activeTab, setActiveTab] = useState('insert');

  const [cycle, setCycle] = useState({
    id: "",
    closing_date:"",
  });
  useEffect(() => {
      axios.get("http://localhost:3005/auth/cycle")
      .then(([cycleResult, employeeResult, tranreqResult]) => {
        if (cycleResult.data.Status) {
          setCycle(cycleResult.data.Result);
        } else {
          alert(cycleResult.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("id", cycle.id);
    formData.append("closing_date", cycle.closing_date);

    axios.post("http://localhost:3005/auth/add_transfer_cycle", formData)
      .then((result) => {
        if (result.data.Status) {
          alert("Insert successful");
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  };
  const renderForm = () => {
    return (
      <form className="row g-1" onSubmit={handleSubmit}>
        <div className="form-container">
          
          <p className="heading3"> Enter Transfer Cycle ID</p>
        <div className="form-group">
          <label htmlFor="transferCycleID">Transfer Cycle ID:</label>
          <input type="text" id="transferCycleID" />
        </div>
        <div className="form-group">
          <label htmlFor="closingDate">Closing Date:</label>
          <input type="date" id="closingDate" onChange={(e) => setCycle({ ...cycle, closing_date: e.target.value })}/>
        </div>
        

        <div className="button-group">
        <button className="submit-button" type="submit">Submit</button>
            <button className="reset-button" type="button" onClick={() => setCycle({
              id: "",
              closing_date:"",
            })}>Reset</button>
        </div>
     
      </div>
      </form>
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

export default TransferCycle;
