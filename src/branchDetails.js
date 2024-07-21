import React, { useEffect, useState } from "react";
import axios from "axios";

import './employeeForm.css';

const BranchDetails = () => {
  const [activeTab, setActiveTab] = useState('insert');
  const [armanger, setArManger] = useState([]);
  const [branch, setBranch] = useState({
    id: "",
    branch_name: "",
    branch_address: "",
    area_manager_id:"",
  });

  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:3005/auth/are_manager"),
      axios.get("http://localhost:3005/auth/branch"),
    ])
      .then(([armangerResult, branchResult,]) => {
        if (armangerResult.data.Status) {
          setArManger(armangerResult.data.Result);
        } else {
          alert(armangerResult.data.Error);
        }

        if (branchResult.data.Status) {
          setBranch(branchResult.data.Result);
        } else {
          alert(branchResult.data.Error);
        }

      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("id", branch.id);
    formData.append("branch_name", branch.branch_name);
    formData.append("branch_address", branch.branch_address);
    formData.append("area_manager_id", branch.area_manager_id);
    

    axios.post("http://localhost:3005/auth/add_branch", formData)
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
          <p className="heading3"> Enter Branch Details</p>
        <div className="form-group">
          <label htmlFor="branchNo">Branch No:</label>
          <input type="text" id="branchNo" onChange={(e) => setBranch({ ...branch, id: e.target.value })} />
        </div>
        <div className="form-group">
          <label htmlFor="branchName">Branch  Name:</label>
          <input type="text" id="branchName"  onChange={(e) => setBranch({ ...branch, branch_name: e.target.value })}/>
        </div>
        <div className="form-group">
          <label htmlFor="branchAddress">Branch Address:</label>
          <input type="text" id="branchAddress" onChange={(e) => setBranch({ ...branch, branch_address: e.target.value })} />
        </div>
        
        <div className="form-group">
          <label htmlFor="areaManagerID">Area Manager ID:</label>
          <select
              name="area_manager_id"
              id="area_manager_id"
              className="form-select"
              onChange={(e) => setBranch({ ...branch, area_manager_id: e.target.value })}
            >
              <option value="">Select Area Manager ID</option>
              {armanger.map((m) => (
                <option key={m.id} value={m.id}>{m.id}</option>
              ))}
            </select>
        </div>
        

        <div className="button-group">
        <button className="submit-button" type="submit">Submit</button>
            <button className="reset-button" type="button" onClick={() => setBranch({
              id: "",
              branch_name: "",
              branch_address: "",
              area_manager_id:"",
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

export default BranchDetails;
