import React, { useState } from "react";
import "./RecentCases.css"; // Importing the associated CSS file

const RecentCases = () => {
  // State to hold cases and add new ones
  const [cases, setCases] = useState([
    { id: 1, name: "Case 1", status: "In Progress", details: "Details of the case go here." },
    { id: 2, name: "Case 2", status: "Completed", details: "Details of the case go here." },
  ]);

  const [newCaseName, setNewCaseName] = useState("");
  const [newCaseStatus, setNewCaseStatus] = useState("In Progress");

  // Add new case
  const addNewCase = () => {
    if (newCaseName && newCaseStatus) {
      const newCase = {
        id: cases.length + 1,
        name: newCaseName,
        status: newCaseStatus,
        details: "Details for new case", // Modify according to your use case
      };
      setCases([...cases, newCase]);
      setNewCaseName("");
    } else {
      alert("Please fill in both the name and status.");
    }
  };

  return (
    <div className="recent-cases-container">
      <h2>Recent Cases</h2>
      
      {/* Case List */}
      <ul className="cases-list">
        {cases.map((caseItem) => (
          <li key={caseItem.id} className={`case-item ${caseItem.status.replace(" ", "-").toLowerCase()}`}>
            <div className="case-header">
              <span className="case-name">{caseItem.name}</span>
              <span className="case-status">{caseItem.status}</span>
            </div>
            <div className="case-details">
              <p>{caseItem.details}</p>
            </div>
          </li>
        ))}
      </ul>

      {/* Add New Case Form */}
      <div className="add-case-form">
        <input
          type="text"
          placeholder="Enter case name"
          value={newCaseName}
          onChange={(e) => setNewCaseName(e.target.value)}
        />
        <select onChange={(e) => setNewCaseStatus(e.target.value)} value={newCaseStatus}>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
        <button onClick={addNewCase}>Add Case</button>
      </div>
    </div>
  );
};

export default RecentCases;
